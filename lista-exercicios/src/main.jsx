//Importando arquivos necessários para a MAIN
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'
import Error from './routes/Error/index.jsx'
import EditarProduto from './routes/EditarProdutos/index.jsx'


//Criando possíveis rotas para a aplicação
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    //Ira aparecer o error caso o usuário coloque uma URI inexistente
    errorElement: <Error/>,
    //Children funciona para armazenar todas as páginas acessadas
    children:[
      {
        //Pega a URI da página solicitada
        path: "/",
        //Chama o componente escolhido pelo usuário
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto/>
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      }
    ]
  }
])

//Criar um RouterProvider para ter acesso a renderização das páginas
ReactDOM.createRoot(document.getElementById('root')).render(
  //Componente do React para envolver outros componentes e detectar problemas no código
  <React.StrictMode>
{/* //Gerenciando as rotas da aplicação */}
    <RouterProvider router={router} />
  </React.StrictMode>
)




