import backgroundImage from 'figma:asset/186d14bc25082db6ac27364a664aab58192272a8.png';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          transform: 'rotate(-53deg) scale(2)',
          transformOrigin: 'center',
          width: '200%',
          height: '200%',
          left: '-50%',
          top: '-50%'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#000000',
          opacity: 0.47
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: '#CF0000',
          mixBlendMode: 'overlay',
          opacity: 0.77
        }}
      />
      <h1 className="text-white text-8xl font-serif relative z-10">
        no' yet
      </h1>
    </div>
  );
}