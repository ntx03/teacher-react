import React from 'react';
import ParentsDocument from './ParentsDocument';

function Parents() {
    return (
        <main className="content">
            <section className="greetings">
                <div className="parents__container">
                    <h2 className="greetings__title">Полезные материалы для родителей</h2>
                    <ul className="parents__list">
                        <ParentsDocument
                            name={'Организация учебного процесса в домашней обстановке'}
                            href={require('../documents/parents/1.png')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Рекомендация родителям детей, временно находящихся на дистанционном обучении'}
                            href={require('../documents/parents/IMG-20200413-WA0034.jpg')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Брошюра на тему "Школа для будущей профессии'}
                            href={require('../documents/parents/Брошюра в чем поучаствовать школьнику.pdf')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Памятка "Как родителям справиться с буллингом'}
                            href={require('../documents/parents/как родителям справиться с буллингом.doc')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Крупнейшие федеральные проекты в сфере профессиональной ориентации'}
                            href={require('../documents/parents/Крупнейшие федеральные проекты в сфере профориентации.pdf')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Рекомендации родителям по адаптации учащихся 5-х классов'}
                            href={require('../documents/parents/рекомендации родителям при адаптации к 5 классу.docx')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Советы родителям при переходном возрасте ребёнка'}
                            href={require('../documents/parents//советы родителям по переходному периоду детей.docx')}
                            nameLink={'СКАЧАТЬ'} />
                        <ParentsDocument
                            name={'Сайт "Атлас новых профессий" - ваш навигатор по рынку'}
                            href={'https://new.atlas100.ru/'}
                            nameLink={'ПЕРЕЙТИ'} />
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Parents;