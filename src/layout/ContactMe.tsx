import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Container from '../components/Container';
import ErrorItem from '../components/ErrorItem';

type FormDataT = {
    name: string;
    email: string;
    information: string;
};

function ContactMe() {
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormDataT>();

    const onsubmit = (data: FormDataT) => {
        setSubmitting(true);

        fetch(import.meta.env.VITE_SEND_FORM_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) return;
                setSubmitting(false);
                setSuccess(
                    'Thank you very much for contacting me. I have received your message and will respond as soon as possible.'
                );
                reset();

                setTimeout(() => setSuccess(''), 3000);
            })
            .catch((err) => console.error(err));
    };

    return (
        <Container id="contactMe" className="flex items-center">
            <section className="border-border-color text-first-font-color mx-auto w-full rounded-2xl border p-6 shadow-lg lg:w-6/10">
                {success && <div className="mb-4 rounded-lg border border-green-200 p-3 text-green-400">{success}</div>}

                <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
                <p className="mb-6 text-sm">Fill out the form and I will get back to you as soon as possible.</p>

                <form noValidate onSubmit={handleSubmit(onsubmit)}>
                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Name</span>

                        <input
                            id="name"
                            type="text"
                            className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ${errors.name ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:border-primary-color'} text-first-font-color`}
                            {...register('name', { required: 'This field is required' })}
                        />

                        {errors.name && <ErrorItem>{errors.name.message}</ErrorItem>}
                    </label>

                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Email</span>
                        <input
                            id="email"
                            type="email"
                            className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ${errors.email ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:border-primary-color'} text-first-font-color`}
                            {...register('email', {
                                required: 'This field is required',
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid Email' },
                            })}
                        />

                        {errors.email && <ErrorItem>{errors.email.message}</ErrorItem>}
                    </label>

                    <label className="mb-4 block">
                        <span className="text-sm font-medium">Message</span>
                        <textarea
                            id="information"
                            rows={5}
                            className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm placeholder:opacity-60 focus:ring-2 focus:ring-offset-1 focus:outline-none ${errors.information ? 'border-red-400 focus:ring-red-200' : 'border-border-color focus:border-primary-color'} text-first-font-color`}
                            {...register('information', { required: 'This field is required' })}
                        />
                        {errors.information && <ErrorItem>{errors.information.message}</ErrorItem>}
                    </label>

                    <div className="flex items-center justify-start">
                        <button
                            type="submit"
                            disabled={submitting}
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm focus:ring-2 focus:ring-offset-1 focus:outline-none ${submitting ? 'bg-primary-color cursor-wait opacity-50' : 'bg-primary-color hover:bg-primary-color cursor-pointer hover:opacity-80'} text-first-font-color`}
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
            </section>
        </Container>
    );
}
export default ContactMe;
