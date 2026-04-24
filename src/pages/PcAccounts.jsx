import lolIcon from '../images/LOL_Icon.jpg';
import dotaIcon from '../images/dota2_icon.jpg';
import valorantIcon from '../images/Valorant_icon.jpg';

export default function PcAccounts() {
  const games = [
    { name: 'League of Legends', img: lolIcon },
    { name: 'Dota 2', img: dotaIcon },
    { name: 'Valorant', img: valorantIcon },
  ];

  return (
    <div style={{ padding: '40px', width: '100%' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        justifyContent: 'center'
      }}>
        {games.map((game, index) => (
          <div key={index} style={{
            width: '220px',
            height: '220px',
            borderRadius: '25px',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            backgroundColor: '#000', // Keeps background dark if images have transparency
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <img 
              src={game.img} 
              alt={game.name} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '15px',
              width: '100%',
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
              fontSize: '1.1rem'
            }}>
              {game.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}