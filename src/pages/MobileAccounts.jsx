import mlIcon from '../images/Mobile_legends_icon.jpg';
import wildRiftIcon from '../images/wildrift_icon.jpg';
import codIcon from '../images/COD_icon.png';
import hokIcon from '../images/HOK_icon.jpg';
import dragonCityIcon from '../images/Dragon_city_icon.png';

export default function MobileAccounts() {
  const games = [
    { name: 'Mobile Legends', img: mlIcon },
    { name: 'Wild Rift', img: wildRiftIcon },
    { name: 'Call of Duty', img: codIcon },
    { name: 'Honor of Kings', img: hokIcon },
    { name: 'Dragon City', img: dragonCityIcon },
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