export default function Genre(props) {
    const defaultStyle = {
        height: '20.61vh',
        width: '12.1vw',
        borderRadius: '1rem',
    }
    return (
        <div onClick={props.click}
        style={{...defaultStyle, ...props.style}}>
            <h2 style={{
                color: 'white',
                fontFamily: 'DM Sans',
                fontSize: '36px',
                fontWeight: '500',
                lineHeight: '46.87px',
                textAlign: 'left',
                marginLeft: '1rem',
                marginTop: '1rem',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',

                }}>{props.name}</h2>
            <img src={props.img} style={{ 
                width: '80%', 
                height: '40%', 
                borderRadius: '0.7rem', 
                objectFit: 'cover',
                display: 'block',
                margin: '0 auto',
                position: 'relative',
                top: '5vh',
                 }} />
        </div>
    )
}