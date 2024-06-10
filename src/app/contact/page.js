import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23559.233054106495!2d77.39887011973593!3d28.626736494561644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee307ecc7e91%3A0x16613eec68653aa4!2sCrossings%20Republik%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718005743866!5m2!1sen!2sin" width={100} height={450} style={{border: 0}} allowfullscreen="" loading="lazy" className={styles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;