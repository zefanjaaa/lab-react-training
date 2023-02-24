function Greetings(props) {
   
    switch (props.lang) {
        case 'de':
            return <p><b>Hallo</b> {props.children}</p>
        case 'en':
            return <p><b>Hello</b> {props.children}</p>
        case 'es':
            return <p><b>Hola </b>{props.children}</p>
        case 'fr':
            return <p><b>Bonjour </b>{props.children}</p>
        default:
            return <p> Nothing to see here</p>
        }
    
}

export default Greetings