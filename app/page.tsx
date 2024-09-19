import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/UGsVpzN8Fm-pzbRk/scene.splinecode"
        />
      </div>
      <style jsx>{`
        /* Estilos padrão para desktop (opcional) */
        .spline-container {
          /* Estilos para desktop, se necessário */
        }

        /* Estilos específicos para dispositivos móveis */
        @media only screen and (max-width: 767px) {
          .spline-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .spline-container :global(canvas) {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </main>
  );
}
