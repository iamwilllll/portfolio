import React, { useState, type JSX } from 'react';
import Container from '../components/Container';

type FormState = {
    name: string;
    email: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function ContactMe(): JSX.Element {
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const validate = (values: FormState): FormErrors => {
        const errs: FormErrors = {};

        if (!values.name.trim()) errs.name = 'Name is required.';

        if (!values.email.trim()) errs.email = 'Email is required.';
        else {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!re.test(values.email)) errs.email = 'Enter a valid email.';
        }

        if (!values.message.trim()) errs.message = 'Message is required.';
        else if (values.message.trim().length < 10) errs.message = 'Message must be at least 10 characters long.';

        return errs;
    };

    const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
        setForm(prev => ({ ...prev, [key]: value }));

        setErrors(prev => {
            const next = { ...prev };
            const single = validate({ ...form, [key]: value });
            if (single[key]) next[key] = single[key];
            else delete next[key];
            return next;
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(null);

        const validation = validate(form);
        setErrors(validation);

        if (Object.keys(validation).length) return;

        setSubmitting(true);
        console.log(form);
        setSubmitting(false);
        setSuccess('asd');

        setTimeout(() => setSuccess(null), 3000);
    };

    return (
        <Container id="contactMe" className="flex items-center">
            <div className="w-full mx-auto p-6 rounded-2xl shadow-lg border border-border-color text-first-font-color lg:w-6/10">
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-sm mb-6">Fill out the form and I will get back to you as soon as possible.</p>

                {success && <div className="mb-4 p-3 rounded-lg border border-green-200 text-green-400">{success}</div>}

                <form onSubmit={handleSubmit} noValidate>
                    <label className="block mb-4">
                        <span className="text-sm font-medium">Name</span>
                        <input
                            type="text"
                            value={form.name}
                            onChange={e => handleChange('name', e.target.value)}
                            className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm bg-transparent placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                errors.name ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:ring-indigo-200'
                            } text-first-font-color`}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="mt-1 text-sm text-red-400">
                                {errors.name}
                            </p>
                        )}
                    </label>

                    <label className="block mb-4">
                        <span className="text-sm font-medium">Email</span>
                        <input
                            type="email"
                            value={form.email}
                            onChange={e => handleChange('email', e.target.value)}
                            className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm bg-transparent placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                errors.email ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:ring-indigo-200'
                            } text-first-font-color`}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-400">
                                {errors.email}
                            </p>
                        )}
                    </label>

                    <label className="block mb-4">
                        <span className="text-sm font-medium">Message</span>
                        <textarea
                            value={form.message}
                            onChange={e => handleChange('message', e.target.value)}
                            rows={5}
                            className={`mt-1 block w-full rounded-lg border px-3 py-2 shadow-sm bg-transparent placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                errors.message ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:ring-indigo-200'
                            } text-first-font-color`}
                            aria-invalid={Boolean(errors.message)}
                            aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                            <p id="message-error" className="mt-1 text-sm text-red-400">
                                {errors.message}
                            </p>
                        )}
                    </label>

                    <div className="flex items-center justify-start">
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                                submitting ? 'bg-indigo-300 cursor-wait' : 'bg-indigo-600 hover:bg-indigo-700'
                            } text-first-font-color`}
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}
