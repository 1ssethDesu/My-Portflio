import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className='sectionTitle'>Contacts</h1>
        <form action="" >
            <div className='form-group'>
                <label htmlFor='name' hidden>
                    Name
                </label>
                <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                required
                 />
            </div>

            <div className='form-group'>
                <label htmlFor='email' hidden>
                    Email
                </label>
                <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                required
                 />
            </div>

            <div className='form-group'>
                <label htmlFor='message' hidden>
                    Name
                </label>
                <textarea
                name='message'
                id='message'
                placeholder='Message'
                required></textarea>
            </div>

            <input className='hover-btn' type='submit' value='Submit'/>

        </form>
    </section>
  )
}

export default Contact