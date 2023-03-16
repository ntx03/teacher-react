import ParentsDocument from "../ParentsDocument";
import Шестой_класс_аннотация from "../../documents/teachers/work_programm/6 класс аннотация 2021-22.docx";
import Пятый_класс_аннотация from "../../documents/teachers/work_programm/аннотация 5 класс.docx";
import Программа from "../../documents/teachers/work_programm/6 класс 2021-22.docx";
import Аннотация from "../../documents/teachers/work_programm/Аннотация 6 класс 8 вид.docx";
import Седьмой_класс_аннотация from "../../documents/teachers/work_programm/Аннотация 7 класс.docx";
import Восьмой_класс_аннотация from "../../documents/teachers/work_programm/Аннотация 8 класс.docx";
import Девятый_класс_аннотация from "../../documents/teachers/work_programm/аннотация 9 класс.docx";
import Одиннадцатый_класс_аннотация from "../../documents/teachers/work_programm/Аннотация11 б.docx";
import Десятый_класс_аннотация from "../../documents/teachers/work_programm/Аннотация 10 класс.docx";
import Планирование from "../../documents/teachers/work_programm/география 8 класс планирование.docx";
import КТП_восьмой_класс from "../../documents/teachers/work_programm/ктп 8 класс климанова.docx";
import Рабочая_программа from "../../documents/teachers/work_programm/рабочая программа 5 класс.docx";
import Рабочая_программа_шестой_класс from "../../documents/teachers/work_programm/рабочая программа 6 класс 8 вид.docx";
import Рабочая_программа_седьмой_класс from "../../documents/teachers/work_programm/рабочая программа 7 класса.doc";
import Рабочая_программа_девятый_класс from "../../documents/teachers/work_programm/рабочая программа 9 класс.docx";
import Рабочая_программа_десятый_класс from "../../documents/teachers/work_programm/рабочая программа 10 класс.docx";
import Рабочая_программа_11_класс from "../../documents/teachers/work_programm/рабочая программа 11 б.docx";

function ColleaguesWork() {
  return (
    <>
      <ParentsDocument
        name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    6 класс (34 часа, 1 раз в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Шестой_класс_аннотация}
      />
      <ParentsDocument name={"Рабочая программа по географии 6 класс"} nameLink={"СКАЧАТЬ"} href={Программа} />
      <ParentsDocument
        name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    5 класс (34 часа, 1 раз в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Пятый_класс_аннотация}
      />
      <ParentsDocument name={"Аннотация 6 класс 8 вид"} nameLink={"СКАЧАТЬ"} href={Аннотация} />
      <ParentsDocument
        name={`Аннотация
                                    О.А. Климанова, В.В. Климанов, Э.В. Ким
                                    География. Землеведение.
                                    7 класс (68 часов, 2 раза в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Седьмой_класс_аннотация}
      />
      <ParentsDocument
        name={`Аннотация
                                    А.И. Алексеев, В. А. Низовцев, Э.В. Ким
                                    География. Землеведение.
                                    8 класс (68 часов, 2 раз в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Восьмой_класс_аннотация}
      />
      <ParentsDocument
        name={`А.И. Алексеев, В.А. Низовцев, Э. В. Ким
                                    География. Хозяйство России. Хозяйство и географические районы
                                    9 класс (68 часов, 2 раз в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Девятый_класс_аннотация}
      />
      <ParentsDocument
        name={`АННОТАЦИЯ
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    10 класс (34 часа, 1 раз в неделю).`}
        nameLink={"СКАЧАТЬ"}
        href={Десятый_класс_аннотация}
      />
      <ParentsDocument
        name={`Аннотация
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    11 класс (34 часа, 1 раз в неделю).`}
        nameLink={"СКАЧАТЬ"}
        href={Одиннадцатый_класс_аннотация}
      />
      <ParentsDocument
        name={`Домогацких Е. М., Алексеевский Н. И.
                                    География: физическая география России.
                                    8 класс (68 часов, 2 раза в неделю).`}
        nameLink={"СКАЧАТЬ"}
        href={Планирование}
      />
      <ParentsDocument name={`ктп 8 класс климанова`} nameLink={"СКАЧАТЬ"} href={КТП_восьмой_класс} />
      <ParentsDocument name={`Рабочая программа 5 класс`} nameLink={"СКАЧАТЬ"} href={Рабочая_программа} />
      <ParentsDocument name={`рабочая программа 6 класс 8 вид`} nameLink={"СКАЧАТЬ"} href={Рабочая_программа_шестой_класс} />
      <ParentsDocument
        name={`Программа курса «География. Страноведение» (7 класс)
                                    О.А. Климанова, В.В. Климанов
                                    (68 часов, 2 часа в неделю)`}
        nameLink={"СКАЧАТЬ"}
        href={Рабочая_программа_седьмой_класс}
      />
      <ParentsDocument name={`Рабочая программа по географии 9 класс`} nameLink={"СКАЧАТЬ"} href={Рабочая_программа_девятый_класс} />
      <ParentsDocument name={`Рабочая программа 10 класс`} nameLink={"СКАЧАТЬ"} href={Рабочая_программа_десятый_класс} />
      <ParentsDocument
        name={`Рабочая программа
                                    Максаковский В. П.
                                    Экономическая и социальная география мира.
                                    11 класс (34 часа, 1 раз в неделю).`}
        nameLink={"СКАЧАТЬ"}
        href={Рабочая_программа_11_класс}
      />
    </>
  );
}

export default ColleaguesWork;
