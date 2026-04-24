// 1. Import the image with a relative path (go up one folder, then into images)
import heroGraphic from '../images/Player_vault_Text.png';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', width: '100%' }}>
      <img 
        // 2. Use the imported variable inside curly braces
        src={heroGraphic} 
        alt="Player Vault Hero Graphic" 
        style={{ 
          maxWidth: '80%', 
          height: 'auto',
          marginTop: '-10vh' 
        }} 
      />
    </div>
  );
}