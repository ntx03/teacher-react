import VideoCard from "../VideoCard";

function VideoSchool() {
  return (
    <>
      <p className="video__text-heaher">Когда мы вместе - это сила!</p>
      <div className="video__block">
        <VideoCard
          link={"https://rutube.ru/play/embed/c4074c4bb47d0c6206689241edfe0b59"}
          name={"Флэшмоб ко Дню студента, учащиеся МАОУ исетской СОШ 1 поздравляют с Днём студента."}
        />
        <VideoCard
          link={"https://rutube.ru/play/embed/c33b525d6c342f093579ddcca6674e22"}
          name={"Флэшмоб - акция к Дню флага от РДШ, Отряд 3, летний оздоровительный лагерь."}
        />
        <VideoCard
          link={"https://rutube.ru/play/embed/17c75c85f980f94c7d7c5bb208d93185"}
          name={"К Дню русского языка, который будет 21 февраля 6 а класс подготовил приветствия на разных языках мира."}
        />
      </div>
    </>
  );
}

export default VideoSchool;
