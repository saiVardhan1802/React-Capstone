export default function Chosen(props) {
    return (
        <div style={{
            width: '10rem',
            height: '2.5rem',
            borderRadius: '2rem',
            background: 'rgba(20, 138, 8, 1)',
            
            fontSize: '1.2rem',
            color: 'white',
            marginLeft: '1vw',
            marginTop: '1vw',
            ...props.style
        }}
        onClick={props.submitClick}
        ><span style={{
            position: 'relative',
            top: '0.75vh',
            fontFamily: 'DM Sans',
        }}><p className={props.className} style={{  ...props.textStyle}}>{props.text}</p><p style={{
            textAlign: 'right',
            position: 'relative',
            bottom: '2.4vh',
            right: '1vw',
            color: 'rgba(63, 62, 62, 0.658)',
            cursor: 'default',
             ...props.closeStyle}}
             onClick={props.closeClick}
             onMouseOver={(e) => e.target.style.color = 'white'}
            onMouseOut={(e) => e.target.style.color = 'rgba(63, 62, 62, 0.658)'}>{props.close}</p></span></div>
    )
}