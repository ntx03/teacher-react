import ParentsDocument from "../ParentsDocument";
import Викторина from "../../documents/teachers/Викторина Тюм обл.docx";
import Геоинформационные_технологии from "../../documents/teachers/геоинформационные технологии на уроках географии.pptx";
import Игры_на_уроках_географии from "../../documents/teachers/ИГРЫ НА УРОКАХ ГЕОГРАФИИ.pptx";
import Ландшафтная_карта from "../../documents/teachers/Ландшафтная карта.jpg";
import Оценочная_карта from "../../documents/teachers/Оценочная карта.jpg";
import Подход from "../../documents/teachers/практико ориентированный подход.docx";
import Методы_обучения from "../../documents/teachers/Презентация на тему Интерактивные методы обучения .ppt";
import Тюменская_область from "../../documents/teachers/Тюменская область.ppt";

function ColleaguesMain() {
  return (
    <>
      <ParentsDocument name={"Викторина Тюменской области"} nameLink={"СКАЧАТЬ"} href={Викторина} />
      <ParentsDocument name={"Геоинформационные технологии на уроках географии"} nameLink={"СКАЧАТЬ"} href={Геоинформационные_технологии} />
      <ParentsDocument name={"Игры на уроках географии"} nameLink={"СКАЧАТЬ"} href={Игры_на_уроках_географии} />
      <ParentsDocument name={"Ландшафтная карта Исетского района"} nameLink={"СКАЧАТЬ"} href={Ландшафтная_карта} />
      <ParentsDocument name={"Оценочная карта Исетского района"} nameLink={"СКАЧАТЬ"} href={Оценочная_карта} />
      <ParentsDocument name={"Практико-ориентированный подход на уроках географии"} nameLink={"СКАЧАТЬ"} href={Подход} />
      <ParentsDocument name={'Презентация на тему "Интерактивные методы обучения'} nameLink={"СКАЧАТЬ"} href={Методы_обучения} />
      <ParentsDocument name={'Презентация на тему "Тюменская область вчера и сегодня'} nameLink={"СКАЧАТЬ"} href={Тюменская_область} />
    </>
  );
}

export default ColleaguesMain;
