import '../public/style.css';
import '../public/normalize.css';
export default function MyApp({Component,pageProps}){
    return <Component{...pageProps} />
};