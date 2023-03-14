import React from 'react';
import PhotoContainer from './PhotoContainer';

function Photo({ item, isOpen }) {
    function handleClick(e) {
        isOpen(true);
        const target = e.target;
        return item({
            name: target.alt,
            link: target.src,
        })
    }
    return (
        <main className="content">
            <section className="photo">
                <h2 className="video__text-heaher">Обучение в Артеке. Июль 2021г.</h2>
                <div className="photo__block">
                    <PhotoContainer name={'вручение грамоты'} onClick={handleClick}
                        link={require("../images/photo/artek/сжатие/IMG-c56dcea3a81e6d217e5ccadac963c80b-V.jpg")} />
                    <PhotoContainer name={'блокнот и ручка на столе'} onClick={handleClick}
                        link={require('../images/photo/artek/сжатие/IMG_20210714_092233.jpg')} />
                    <PhotoContainer name={'стеллаж с журналами'} onClick={handleClick}
                        link={require('../images/photo/artek/сжатие/IMG_20210714_133950.jpg')} />
                    <PhotoContainer name={'Коротаева Анна на фоне фотографий детей'} onClick={handleClick}
                        link={require('../images/photo/artek/сжатие/IMG_20210714_134605.jpg')} />
                    <PhotoContainer name={'Коротаева Анна около стены с морем'} onClick={handleClick}
                        link={require('../images/photo/artek/сжатие/IMG_20210714_134831.jpg')} />
                    <PhotoContainer name={'Коротаева Анна с детьми'} onClick={handleClick}
                        link={require('../images/photo/artek/сжатие/IMG_20210722_183652_821.jpg')} />
                </div>
                <h2 className="video__text-heaher">Региональный конкурс управленческих команд "Созвездие"</h2>
                <div className="photo__block">
                    <PhotoContainer name={'женщины'} onClick={handleClick} link={require('../images/photo/конкурс созвездие/сжатие/IMG_20211012_093145.jpg')} />
                    <PhotoContainer name={'Региональный конкурс управленческих комманд Созвездие'} onClick={handleClick} link={require('../images/photo/конкурс созвездие/сжатие/IMG_20211014_122514.jpg')} />
                    <PhotoContainer name={'Региональный конкурс управленческих комманд Созвездие'} onClick={handleClick} link={require('../images/photo/конкурс созвездие/сжатие/IMG_20211015_202948_839.jpg')} />
                    <PhotoContainer name={'Региональный конкурс управленческих комманд Созвездие'} onClick={handleClick} link={require('../images/photo/конкурс созвездие/сжатие/IMG_20211016_074655.jpg')} />
                </div>
                <h2 className="video__text-heaher">Лагерь остров детства, ЮИД 9 декабря 2021г.</h2>
                <div className="photo__block">
                    <PhotoContainer name={'Лагерь остров детства, ЮИД 9 декабря 2021г.'} onClick={handleClick} link={require('../images/photo/Лагерь остров детства/сжатие/1644673582163.jpg')} />
                    <PhotoContainer name={'Лагерь остров детства, ЮИД 9 декабря 2021г.'} onClick={handleClick} link={require('../images/photo/Лагерь остров детства/сжатие/1644673582174.jpg')} />
                    <PhotoContainer name={'Лагерь остров детства, ЮИД 9 декабря 2021г.'} onClick={handleClick} link={require('../images/photo/Лагерь остров детства/сжатие/1644673582186.jpg')} />
                    <PhotoContainer name={'Лагерь остров детства, ЮИД 9 декабря 2021г.'} onClick={handleClick} link={require('../images/photo/Лагерь остров детства/сжатие/1644673582196.jpg')} />
                    <PhotoContainer name={'Лагерь остров детства, ЮИД 9 декабря 2021г.'} onClick={handleClick} link={require('../images/photo/Лагерь остров детства/сжатие/1644673582206.jpg')} />
                </div>
                <h2 className="video__text-heaher">Мои шестиклашки</h2>
                <div className="photo__block">
                    <PhotoContainer name={'мы вместе'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-4fe947519e1f2ec5493733353e63a7db-V.jpg')} />
                    <PhotoContainer name={'групповое фото'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-5c28b8fe2c879a233318713f3a56bb5f-V.jpg')} />
                    <PhotoContainer name={'ученики 6 класса'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-639de89a3bca28991b42e6bd24b2dd8e-V.jpg')} />
                    <PhotoContainer name={'я и ученик'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-67f5d98786d1480f44e8802665c0a0ec-V.jpg')} />
                    <PhotoContainer name={'девочка с оладьями'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-6c5f53bd93ffa52285fff5b88deb50eb-V.jpg')} />
                    <PhotoContainer name={'дети в классе'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-789a5106b9c68efcd71bac30bd6a8842-V.jpg')} />
                    <PhotoContainer name={'дети в классе'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-79d2e87b78ac8aa8548ba1da05579bda-V.jpg')} />
                    <PhotoContainer name={'дети поздравляют с днем рождения на улице'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG-877e11ba896826c321e3cd77d0528ba7-V.jpg')} />
                    <PhotoContainer name={'дети за партой'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG_20210901_101227.jpg')} />
                    <PhotoContainer name={'дети за партой'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG_20210901_101233.jpg')} />
                    <PhotoContainer name={'дети у классной доски'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG_20210901_104858.jpg')} />
                    <PhotoContainer name={'дети на прогулке летом'} onClick={handleClick} link={require('../images/photo/мои шестиклашки/сжатие/IMG_20210905_101049.jpg')} />
                </div>
                <h2 className="video__text-heaher">Светящийся флэшмоб</h2>
                <div className="photo__block">
                    <PhotoContainer name={'Аня Коротаева с детьми'} onClick={handleClick} link={require('../images/photo/Светящийся флэшмоб/сжатие/1644673723341.jpg')} />
                    <PhotoContainer name={'Аня Коротаева с детьми'} onClick={handleClick} link={require('../images/photo/Светящийся флэшмоб/1644673723307.jpg')} />
                    <PhotoContainer name={'Аня Коротаева с детьми'} onClick={handleClick} link={require('../images/photo/Светящийся флэшмоб/1644673723324.jpg')} />
                </div>
                <h2 className="video__text-heaher">Всероссийский форум классных руководителей 9-10 октября 2021 года</h2>
                <div className="photo__block">
                    <PhotoContainer name={'блокнот с ручкой'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211008_223814.jpg')} />
                    <PhotoContainer name={'Анна Коротаева на форуме'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211009_093959.jpg')} />
                    <PhotoContainer name={'Анна Коротаева на форуме'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211009_094429.jpg')} />
                    <PhotoContainer name={'Анна Коротаева на форуме'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211009_095129.jpg')} />
                    <PhotoContainer name={'Анна Коротаева на форуме'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211009_103038.jpg')} />
                    <PhotoContainer name={'Анна Коротаева на форуме'} onClick={handleClick} link={require('../images/photo/форум классых руководителей 9-10 октября 2021/сжатие/IMG_20211010_113253.jpg')} />
                </div>
                <h2 className="video__text-heaher">Экскурсия в отдел полиции c. Исетское</h2>
                <div className="photo__block">
                    <PhotoContainer name={'ученики в отделе полиции'} onClick={handleClick} link={require('../images/photo/Экскурсия в отдел полиции/1644673445440.jpg')} />
                    <PhotoContainer name={'ученики в отделе полиции'} onClick={handleClick} link={require('../images/photo/Экскурсия в отдел полиции/1644673445451.jpg')} />
                    <PhotoContainer name={'ученики в отделе полиции'} onClick={handleClick} link={require('../images/photo/Экскурсия в отдел полиции/1644673445462.jpg')} />
                </div>
                <h2 className="video__text-heaher">Экскурсия в районный суд c. Исетское</h2>
                <div className="photo__block">
                    <PhotoContainer name={'ученики в районном суде'} onClick={handleClick} link={require('../images/photo/Экскурсия в районный суд/IMG_20211206_192722.jpg')} />
                    <PhotoContainer name={'ученики в районном суде'} onClick={handleClick} link={require('../images/photo/Экскурсия в районный суд/IMG_20211206_215345_735.jpg')} />
                    <PhotoContainer name={'ученики в районном суде'} onClick={handleClick} link={require('../images/photo/Экскурсия в районный суд/IMG_20211206_215407_536.jpg')} />
                </div>
                <h2 className="video__text-heaher">Профориентация- 20 сентябрь 2021 года экскурсия ООО"ЗапСибХлеб-Исеть"</h2>
                <div className="photo__block">
                    <PhotoContainer name={'комбикорм  в руке'} onClick={handleClick} link={require('../images/photo/Экскурсия ООО ЗапСибХлеб-Исеть 20 сентября 2021/сжатие/8Sz_pC3-mNI.jpg')} />
                    <PhotoContainer name={'коровник'} onClick={handleClick} link={require('../images/photo/Экскурсия ООО ЗапСибХлеб-Исеть 20 сентября 2021/сжатие/IMG_20210920_121707.jpg')} />
                    <PhotoContainer name={'доильный зал'} onClick={handleClick} link={require('../images/photo/Экскурсия ООО ЗапСибХлеб-Исеть 20 сентября 2021/сжатие/IMG_20210920_122810.jpg')} />
                    <PhotoContainer name={'территория предприятия'} onClick={handleClick} link={require('../images/photo/Экскурсия ООО ЗапСибХлеб-Исеть 20 сентября 2021/сжатие/IMG_20210920_124252.jpg')} />
                    <PhotoContainer name={'проходная предприятия и все ученики на её фоне'} onClick={handleClick} link={require('../images/photo/Экскурсия ООО ЗапСибХлеб-Исеть 20 сентября 2021/сжатие/IMG_20210920_133103.jpg')} />
                </div>
                <h2 className="video__text-heaher">Экскурсия на предприятие "ПРОНТО-мягкие контейнеры"</h2>
                <div className="photo__block">
                    <PhotoContainer name={'ученики на предприятии'} onClick={handleClick} link={require('../images/photo/Экскурсия предприятие ПРОНТО-мягкие контейнеры/IMG-13c4c95e58aa0485bc04158742cd7437-V.jpg')} />
                    <PhotoContainer name={'готовая продукция'} onClick={handleClick} link={require('../images/photo/Экскурсия предприятие ПРОНТО-мягкие контейнеры/IMG_20210927_120912.jpg')} />
                    <PhotoContainer name={'производственное оборудование'} onClick={handleClick} link={require('../images/photo/Экскурсия предприятие ПРОНТО-мягкие контейнеры/IMG_20210927_121550.jpg')} />
                    <PhotoContainer name={'производственное оборудование'} onClick={handleClick} link={require('../images/photo/Экскурсия предприятие ПРОНТО-мягкие контейнеры/IMG_20210927_121811.jpg')} />
                </div>
                <h2 className="video__text-heaher">День пап, спортивные соревнования среди 6 классов</h2>
                <div className="photo__block">
                    <PhotoContainer name={'День пап'} onClick={handleClick} link={require('../images/photo/День пап, спортивные соревновыания среди 6 классов/1644673832660 (2).jpg')} />
                    <PhotoContainer name={'День пап'} onClick={handleClick} link={require('../images/photo/День пап, спортивные соревновыания среди 6 классов/1644673832670 (2).jpg')} />
                    <PhotoContainer name={'День пап'} onClick={handleClick} link={require('../images/photo/День пап, спортивные соревновыания среди 6 классов/1644673832679 (2).jpg')} />
                    <PhotoContainer name={'День пап'} onClick={handleClick} link={require('../images/photo/День пап, спортивные соревновыания среди 6 классов/1644673832688 (2).jpg')} />
                </div>
            </section>
        </main>
    );
}

export default Photo;