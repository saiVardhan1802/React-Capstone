import { useState } from "react"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        userName: "",
        termsAndConditions: false,
    })
    const [error, setError] = useState({
        name: false,
        email: false,
        mobile: false,
        userName: false,
        termsAndConditions: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, mobile, userName, termsAndConditions } = formData
        setError({
            name: false,
            email: false,
            mobile: false,
            userName: false,
            termsAndConditions: false,
        })   // reset error state
        if (name.trim().length === 0) {  //        
            setError((prevState) => { return { ...prevState, name: true } })
        }
        if (email.trim().length === 0) {
            setError((prevState) => { return { ...prevState, email: true } })
        }
        if (mobile.trim().length === 0) {
            setError((prevState) => { return { ...prevState, mobile: true } })
        }
        if (userName.trim().length === 0) {
            setError((prevState) => { return { ...prevState, userName: true } })
        }
        if (termsAndConditions === false) {
            setError((prevState) => { return { ...prevState, termsAndConditions: true } })
        }
    }

    return (
        <div className="sign-up">
            <form style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                margin: "0 auto",
                gap: "1.5vh",
            }}
                onSubmit={handleSubmit}
            >   <div className={error.name ? 'error-active' : 'text-input'} >
                    <input placeholder="Name" type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />
                    {error.name && <p style={{
                        color: "red",
                        fontSize: "0.8rem",
                        lineHeight: '2.5rem',
                        fontFamily: "'DM Sans', sans-serif"
                    }}>Name is required</p>}
                </div>
                
                <div className={error.email ? 'error-active' : 'text-input'}>
                    <input placeholder="Email" type="text" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
                    {error.email && <p style={{
                        color: "red",
                        fontSize: "0.8rem",
                        lineHeight: '2.5rem',
                        fontFamily: "'DM Sans', sans-serif"
                    }}>Email is required</p>}
                </div>
                
                <div className={error.mobile ? 'error-active' : 'text-input'}>
                    <input placeholder="Mobile" type="text" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} value={formData.mobile} />
                    {error.mobile && <p style={{
                        color: "red",
                        fontSize: "0.8rem",
                        lineHeight: '2.5rem',
                        fontFamily: "'DM Sans', sans-serif"
                    }}
                    >Mobile is required</p>}
                </div>
                
                <div className={error.userName ? 'error-active' : 'text-input'}>
                    <input placeholder="Username" type="text" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} value={formData.userName} />
                    {error.userName && <p style={{
                        color: "red",
                        fontSize: "0.8rem",
                        lineHeight: '2.5rem',
                        fontFamily: "'DM Sans', sans-serif"
                    }}>Username is required</p>}
                </div>
                
                <div style={{
                    display: "flex",
                    gap: "10px",
                    marginLeft: '7.5vw'
                }}>
                    <input id="checkbox" type="checkbox" onChange={(e) => setFormData({ ...formData, termsAndConditions: e.target.checked })} checked={formData.termsAndConditions}
                        
                    />
                    <label style={{
                        color: "white",
                    }} htmlFor="checkbox">Share my registration data with Superapp</label>
                </div>
                {error.termsAndConditions && <p style={{
                    color: "red",
                    fontSize: "0.8rem",
                    marginLeft: "7.5vw",
                    fontFamily: "'DM Sans', sans-serif"
                }}>You must agree to the terms and conditions</p>}
                <button style={{
                    background: '#72DB73',
                    width: '25vw',
                    height: '5vh',
                    fontFamily: "'Roboto', sans-serif",
                    color: 'white',
                    fontSize: '1.6rem',
                    fontWeight: '600',
                    letterSpacing: '0.02em',
                    border: 'none',
                    borderRadius: '2rem',
                    marginTop: error.termsAndConditions ? '0vh' : '4vh',
                    //marginTop: '4vh',
                }} type="submit">Sign Up</button>

                <div style={{
                    width: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5vh'
                }}>
                    <p 
                        style={{
                            color: 'gray',
                            fontFamily: 'Roboto',
                            fontSize: '1rem',
                            fontWeight: '500',
                            lineHeight: '25.51px',
                            letterSpacing: '0.02em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            }}
                    >
                    By clicking on Sign up, you agree to Superapp{" "}
                    <span style={{ color: "green" }}>Terms and Conditions of Use</span>
                    </p>
                    <p 
                        style={{
                            color: 'gray',
                            fontFamily: 'Roboto',
                            fontSize: '1rem',
                            fontWeight: '500',
                            lineHeight: '25.51px',
                            letterSpacing: '0.02em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            }}
                    >
                    To learn more about how Superapp collects, uses, shares and protects your personal data, please head to Superapp{" "}
                    <span style={{ color: "green" }}>Privacy Policy</span>.
                    </p>
                </div>
            </form>
        </div>
    )
}


