import Genre from '../components/Genre'
import Paragraph from '../components/Paragraph'
import Title from '../components/Title'
import image1 from '../assets/Genre_images/set1/image1.png'
import image2 from '../assets/Genre_images/set1/image2.png'
import image3 from '../assets/Genre_images/set1/image3.png'
import image4 from '../assets/Genre_images/set2/image4.png'
import image5 from '../assets/Genre_images/set2/image5.png'
import image6 from '../assets/Genre_images/set2/image6.png'
import image7 from '../assets/Genre_images/set3/image7.png'
import image8 from '../assets/Genre_images/set3/image8.png'
import image9 from '../assets/Genre_images/set3/image9.png'
import Chosen from '../components/Chosen'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

// import image2 from '../assets/Genre_images/image2.png'
// const basePath1 = '../assets/Genre_images/set1';
// const basePath2 = '../assets/Genre_images/set2';
// const basePath3 = '../assets/Genre_images/set3';

export default function Movies() {
    const [isClicked, setIsClicked] = useState({
        Action: false,
        Drama: false,
        Romance: false,
        Thriller: false,
        Western: false,
        Horror: false,
        Fantasy: false,
        Musical: false,
        Fiction: false
    });

    const navigate = useNavigate();

    const handleNext = () => {
        const trueKeys = Object.keys(isClicked).filter((key) => isClicked[key]);

        if (trueKeys.length < 3) {
          alert("Minimum 3 category required")
        }
        else {
          localStorage.setItem("selected", JSON.stringify(trueKeys));
          navigate("/widgets");
        }
      }

    return (
        <div style={{background: 'black', display: 'flex'}}>
            <div style={{
                width: '45vw', 
                height: '100vh', 
                borderRight: '1px solid green', 
                }}>
                <Title style={{
                    fontFamily: 'Single Day',
                    fontSize: '4rem',
                    fontWeight: '400',
                    lineHeight: '99.18px',
                    textAlign: 'left',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none', 
                    color: '#72DB73',       
                    position: 'relative',
                    top: '9vh',
                    left: '5vw'
                }} />
                <Paragraph style={{
                    fontSize: '5rem',
                    fontWeight: '900',
                    lineHeight: '10vh',
                    top: '14vh',
                    left: '5vw'
                }}
                        content='Choose your entertainment category'
                />
                <div style={{
                    width: '25rem',
                    position: 'relative',
                    top: '18vh',
                    right: '7vw'
                }}>
                    <Chosen closeClick={() => setIsClicked({...isClicked, Action: false})} className='genre-selections' style={{display: isClicked.Action? 'inline-block': 'none'}} text='Action'  close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Drama: false})} className='genre-selections' style={{display: isClicked.Drama? 'inline-block': 'none'}} text='Drama' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Romance: false})} className='genre-selections'  style={{display: isClicked.Romance? 'inline-block': 'none'}} text='Romance' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Thriller: false})} className='genre-selections'  style={{display: isClicked.Thriller? 'inline-block': 'none'}} text='Thriller' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Western: false})} className='genre-selections'  style={{display: isClicked.Western? 'inline-block': 'none'}} text='Western' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Horror: false})}  className='genre-selections' style={{display: isClicked.Horror? 'inline-block': 'none'}} text='Horror' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Fantasy: false})} className='genre-selections'  style={{display: isClicked.Fantasy? 'inline-block': 'none'}} text='Fantasy' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Musical: false})} className='genre-selections'  style={{display: isClicked.Musical? 'inline-block': 'none'}} text='Musical' close='X' />
                    <Chosen closeClick={() => setIsClicked({...isClicked, Fiction: false})} className='genre-selections'  style={{display: isClicked.Fiction? 'inline-block': 'none'}} text='Fiction' close='X' />
                </div>
            </div>
            <div style={{
                width: '55vw', 
                height: '100vh', 
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3vh',
                    position: 'relative',
                    top: '8vh',
                    right: '0vw'
                }}>
                    <div
                    style={{
                        display: 'flex',
                        gap: '1.7vw'
                    }}>
                        <Genre click={() => setIsClicked({...isClicked, Action: !isClicked.Action})} name='Action' img={image1} style={{
                            background: 'rgba(255, 82, 9, 1)',
                            border: isClicked.Action? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Drama: !isClicked.Drama})} name='Drama' img={image2} style={{
                            background: 'rgba(215, 164, 255, 1)',
                            border: isClicked.Drama? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Romance: !isClicked.Romance})} name='Romance' img={image3} style={{
                            background: 'rgba(20, 138, 8, 1)',
                            border: isClicked.Romance? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '1.7vw'
                    }}>
                        <Genre click={() => setIsClicked({...isClicked, Thriller: !isClicked.Thriller})} name='Thriller' img={image4} style={{
                            background: 'rgba(132, 194, 255, 1)',
                            border: isClicked.Thriller? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Western: !isClicked.Western})} name='Western' img={image5} style={{
                            background: 'rgba(144, 37, 0, 1)',
                            border: isClicked.Western? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Horror: !isClicked.Horror})} name='Horror' img={image6} style={{
                            background: 'rgba(115, 88, 255, 1)',
                            border: isClicked.Horror? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                    </div>
                    <div style={{
                        display: 'flex',
                        gap: '1.7vw'
                    }}>
                       <Genre click={() => setIsClicked({...isClicked, Fantasy: !isClicked.Fantasy})} name='Fantasy' img={image7} style={{
                        background: 'rgba(255, 74, 222, 1)',
                        border: isClicked.Fantasy? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Musical: !isClicked.Musical})} name='Musical' img={image8} style={{
                            background: 'rgba(230, 30, 50, 1)',
                            border: isClicked.Musical? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                        <Genre click={() => setIsClicked({...isClicked, Fiction: !isClicked.Fiction})} name='Fiction' img={image9} style={{
                            background: 'rgba(108, 208, 97, 1)',
                            border: isClicked.Fiction? '0.33rem solid rgba(17, 184, 0, 1)': ''}} />
                    </div>
                </div>
                <Chosen text='Next Page' style={{
                    fontFamily: 'DM Sans',
                    textAlign: 'center',
                    position: 'fixed',
                    top: '88vh',
                    left: '83.5vw'
                }} submitClick={handleNext} />
            </div>
        </div>
    )
}

