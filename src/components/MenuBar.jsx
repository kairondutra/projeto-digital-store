import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

export default function MenuBar() {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Home',
      command: () => navigate('/')
    },
    {
      label: 'Produtos',
      command: () => navigate('/produtos')
    },
    {
      label: 'Categorias',
      command: () => navigate('/categorias')
    },
    {
      label: 'Meus Pedidos',
      command: () => navigate('/pedidos')
    }

  ];

  return <Menubar model={items} />;
}
