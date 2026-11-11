import { Send } from "lucide-react";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

type MessageFormData = {
    name: string;
    email: string;
    message: string;
}

type FormErrors = Partial<Record<keyof MessageFormData, string>>;

const requiredFields = [
    "name",
    "email",
    "message",
] as const;

function getFormData(
    formData: FormData
): MessageFormData {
    const value = (name: keyof MessageFormData) =>
        String(formData.get(name) ?? "").trim();

    return {
        name: value("name"),
        email: value("email"),
        message: value("message"),
    };
}

function validateForm(
    data: MessageFormData
): FormErrors {
    const errors: FormErrors = {};

    for (const field of requiredFields) {
        if (!data[field].trim()) {
            errors[field] = "This is a required field."
        }
    }

    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }

    return errors;
}

export default function ContactForm() {
    const [errors, setErrors] = useState<FormErrors>({})
    const [formMessage, setFormMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = e.currentTarget;
        const messageData = getFormData(new FormData(form));

        const data = { ...messageData };

        const validationErrors = validateForm(data);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus("idle");
            return;
        }

        setErrors({});
        setStatus("submitting");

        type ApiResponse = {
            id?: string;

            error?: string;

            fields?: Record<string, string[] | undefined>;
        };

        try {
            const response = await fetch("/api/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const body: ApiResponse | null = await response
                .json()
                .catch(() => null);

            if (!response.ok) {
                if (body?.fields) {
                    const fieldErrors: FormErrors = {};

                    for (const [field, messages] of Object.entries(body.fields)) {
                        if (messages?.[0]) {
                            fieldErrors[field as keyof MessageFormData] = messages[0];

                        }
                    }
                    setErrors(fieldErrors);
                    setFormMessage("Please fix the highlighted fields");
                } else {
                    setFormMessage(
                        body?.error ?? "Something went wrong. Please try again."
                    );
                }

                setStatus("error");
                return;
            }

            if (!body?.id) {
                setFormMessage(
                    "Message was sent, but the server did not return its id."
                );
                setStatus("error");
                return;
            }
            setStatus("success");
            setFormMessage(null);
            form.reset();
        } catch {
            setFormMessage(
                "Couldn't reach the server. Check your connection and try again."
            );
            setStatus("error");
        }
    }


    const field = "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none transition-colors";

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            onChange={(e) => {
                const target = e.nativeEvent.target;
                if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;

                const name = target.name as keyof MessageFormData;
                if (errors[name]) setErrors(({ [name]: _N_E_STYLE_LOAD, ...rest }) => rest);
            }}
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
        >
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        className={field}
                    />
                    {errors.name && (
                        <p id="name-error" className="mt-1.5 text-xs leading-5 text-red-600">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className={field}
                    />
                    {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs leading-5 text-red-600">
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-xs tracking-wide text-muted-foreground uppercase"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role, project, or idea..."
                    className={field}
                />
                {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs leading-5 text-red-600">
                        {errors.message}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow-ring disabled:opacity-60"
                >
                    <Send className="size-4" />
                    {status === "submitting" ? "Sending..." : "Send message"}
                </button>
                {status === "success" && (
                    <p role="status" className="text-sm text-primary sm:mr-auto sm:self-center">
                        Message has been sent. You will hear back shortly.
                    </p>
                )}
                {status === "error" && formMessage && (
                    <p role="alert" className="text-sm text-red-700 sm:mr-auto sm:self-center">
                        {formMessage}
                    </p>
                )}
            </div>
        </form>
    )
}