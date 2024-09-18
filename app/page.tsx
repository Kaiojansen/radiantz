import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <Spline
          scene="https://prod.spline.design/UGsVpzN8Fm-pzbRk/scene.splinecode"
          style={styles.spline}
        />
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Ajusta conforme necessário
  },
  container: {
    width: '100%',
    maxWidth: '600px', // Define uma largura máxima para desktops
    margin: '0 auto',
  },
  spline: {
    width: '100%',
    height: 'auto',
  },
};
