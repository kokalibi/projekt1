import Bplatnivalok from "./bplatnivalok";
import Bpgasztronomia from "./bpgasztronomia";
export default function Content(){
    return(
        <main>
            <h4>Röviden Budapestről</h4>
            <p>Magyarország fővárosát, Budapestet a Duna folyó szeli ketté. A XIX. században épült Lánchíd a dimbes-dombos budai oldalt köti össze a sík Pesttel. A Várdomb oldalában futó siklóval juthatunk fel a budai Óvárosba, ahol a Budapesti Történeti Múzeum egészen a római időkig visszavezetve mutatja be a városi életet. A Szentháromság tér ad otthont a XIII. századi Mátyás-templomnak és a Halászbástya lőtornyainak, amelyekből messzire ellátva gyönyörködhetünk a városban. </p>
            <Bplatnivalok bplatnivalok={[
                {id:1, cim:"Parlament", leiras:"A Duna partján álló neogótikus épület Magyarország egyik legismertebb jelképe.", kep: "/img/Országház_(Hungarian_Parliament_Building)(2).jpg"},
                {id:2, cim:"Halászbástya", leiras:"A Halászbástya kilátóteraszairól páratlan panoráma nyílik a Dunára és a pesti oldalra.", kep:"/img/8917-23032283607284415.jpg"},
                {id:3, cim:"Lánchíd", leiras:"Az 1849-ben átadott Lánchíd a Duna első állandó hídja, amely összeköti Buda és Pest városrészeit.", kep:"/img/6603_orig_pre-fullhd.jpg"}
            ]}/>
            <Bpgasztronomia bpgasztronomia={[
                {id:1, cim:"Gulyásleves", leiras:"A gulyásleves egy hagyományos magyar leves, amely marhahúsból, burgonyából, sárgarépából és paprikából készül.", kep:"/img/cb440442af834c888e99e57af4adbc58.webp"},
                {id:2, cim:"Lángos", leiras:"A lángos egy olajban sült tésztaétel, amelyet gyakran fokhagymával, tejföllel és sajttal tálalnak.", kep:"/img/20240413161518-l-c3-a1ngos-20-20hungarian-20fried-20bread.webp"},
                {id:3, cim:"Dobos torta", leiras:"A Dobos torta egy híres magyar desszert, amely több réteg csokoládés piskótából és vajkrémből áll, tetején karamellizált cukorral.", kep:"/img/30532067_2344117_077574597bdc9d3d3252e8150d2c4a0a_wm.jpg"}
            ]}/>
            <h4>Hasznos tippek</h4>
            <ul>
                <li>Nyáron érdemes könnyű, légáteresztő ruházatot viselni, míg télen melegebb rétegekre van szükség a hideg időjárás miatt.</li>
                <li>A tömegközlekedés kiváló módja a város felfedezésének, különösen a metró és a villamos hálózat.</li>
                <li>Ne hagyjuk ki a helyi termálfürdők egyikét, mint például a Széchenyi vagy a Gellért fürdőt.</li>
                <li>Kóstoljuk meg a helyi specialitásokat egy hagyományos magyar étteremben.</li>
                <li>Legyünk óvatosak az értékeinkkel, különösen a turisták által frekventált helyeken.</li>
            </ul>
        </main>
    )
}