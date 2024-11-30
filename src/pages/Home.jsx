import SignupForm from "../components/SignupForm";
import Title from "../components/Title.jsx"
import image13 from "../assets/image13.png"

export default function Home() {
    return (
        <div style={{
            display: "flex",
        }}>
            <div style={{
                //background: "cyan",
                height: "100vh",
                width: "50vw"
            }}>
                <img src={image13}
                    style={{
                        width: '50vw',
                        height: '100vh'
                    }}
                />
                <p
                    style={{
                        color: 'white',
                        fontFamily: 'Roboto',
                        fontSize: '4rem',
                        fontWeight: '900',
                        lineHeight: '7.44vh',
                        letterSpacing: '0.02em',
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        position: 'relative',
                        bottom: '25vh',
                        left: '3vw'
                    }}
                >Discover new things on Superapp</p>
            </div>
            <div style={{
                background: "black",
                height: "100vh",
                width: "50vw"
            }}>
                 <Title />
                 <p
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        fontFamily: "'DM Sans', sans-serif",
                        position: 'relative',
                        top: '4vh',
                    }}
                 >Create you new account</p>
                <SignupForm />
            </div>
        </div>
    )
}