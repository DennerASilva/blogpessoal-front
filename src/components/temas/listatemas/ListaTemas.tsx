import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Tema from "../../../models/Tema";
import CardTemas from "../cardtemas/CardTemas";
import { buscar } from "../../../services/Service";

function ListaTemas() {

    //Hook para gerenciar a navegação do usuário
    const navigate = useNavigate();

    //Váraivel de Estado que recee os temas do back em um Array
    const [temas, setTemas] = useState<Tema[]>([]) //temas: [{id, descricao}] | temas: []

    //useContext acessa nosso contexto, buscando dele as informações necessárias para esse Componente
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    //Função que chama a service buscar() para receber e guardar os temas
    async function buscarTemas() {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    // Esse useEffect verifica se quando o usuário acessou o componente, ele tem um token válido
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    //Esse useEffect dispara a função de busca sempre quando o componente é renderizado
    useEffect(() => {
        buscarTemas()    
    }, [temas.length]) // quantos itns tem no array? 0 
    
    return (
        <>
         {temas.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {temas.map((tema) => ( // map(): para cada item no array, o map() passa os dados para o card
                            <CardTemas key={tema.id} tema={tema} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaTemas;