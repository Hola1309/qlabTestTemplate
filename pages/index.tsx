import Image from 'next/image'

const Index = () => {
    return (
        <div className="mainContainer">
            <div className="headFrame">
            <Image src="/logo.png" alt="me" width="107px" height="53px" />
            <div className="navBar">
            <a href="#">Главная</a>
            <a href="#">Продукция</a>
            <a href="#">Услуги</a>
            <a href="#">Карьера</a>
            <a href="#">Контакты</a>
            </div>
            <div className="infoBar">
            <span className="">+7 (846) 309-07-47</span>
            <span className="">info@samaravolgomash.ru</span>
            </div>
            <Image src="/sideMenu.png" alt="me" width="26" height="15" />
            </div>
            <div className="sliderHead">
            <div className="slogan">сделанно в россии</div>
            <div className="detail">
            <div>СамараВолгоМаш — признанный добросовестный экспортёр. Russian Exporter 2021.</div>
            <input className='detailButton' type='button' value='подробнее'></input>
            </div>
            </div>
            <div className="slider"></div>
            <div>
                <div className="title">самараволгомаш</div>
                <div className="border"></div>
                <div className="SVMblock">
                    <div className="discBlock">
                    <div>ООО “Самараволгомаш” является одним из ведущих производителей оборудования для нефтяной,
                    газовой и химической отраслей промышлености с максимальной степенью локализации.</div>
                    <input className='detailButton' type='button' value='подробнее'></input></div>
                    <div className='discBlockImg'></div>
                </div>
            </div>
            <div className="border"></div>
            <div className="quoteBlock">
                <div className='autorAvatar'></div>
                <div className="post">
                <div className='quote'>СВМ, один из лидеров  региональной государственной программы 
                «Инновационное развитие машиностроительного комплекса Самарской области до 2020 года».</div>
                <div><div className="autorName">Артемьев Алексей Владиславович</div><div>Генеральный директор предприятия</div></div>
                </div>
            </div>
        </div>
    );
};

export default Index;