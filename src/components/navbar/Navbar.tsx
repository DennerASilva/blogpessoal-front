import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link> 
                    
                    <div className="flex gap-4">
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil
                        Sair

                    </div>
                </div>
            </div>    
            
        
        </>
    )
}
