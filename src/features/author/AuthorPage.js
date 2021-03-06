import React from "react";
import Container from "../../common/Container";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import SectionDisplayTasks from "../tasks/TasksPage/SectionDisplayTasks";


export default () => (

    <Container>

        <Header title="O autorze" />

        <SectionDisplayTasks
            param="author"
            title="Michał Adamczyk"
            body={
                <>
                    <p><em>Cześć!</em></p>
                    <p>Nazywam się Michał i bardzo serdecznie <em>Witam Cię</em> na mojej stronie 😃<br />
                    Jestem ciekawym świata i żądnym nowych wyzwań mężem i ojcem dwóch wspaniałych synów 😊
                    </p>

                    <p>Mam <strong>7-miesięczne komercyjne doświadczenie w programowaniu</strong> Java oraz JavaScript
                    (głównie lambdy na AWS). Wielka satysfakcja płynąca z kreowania nowych funkcjonalności przy pomocy kodu oraz
                    konieczność
                    nieustającego rozwoju to niewątpliwe zalety branży IT, która każdego dnia wciąga mnie coraz
                    bardziej 🤩
                    </p>

                    <p>Wieloletnie doświadczenie w projektowaniu odzieży, nadruków i akcesoriów spowodowało, że moje pierwotne zainteresowanie
                    backendem przesunęło się w stronę <strong>JS, React.js i innych technologii frontendowych.</strong>
                    </p>
                </>
            }
        />

        <Footer title="© Michał Adamczyk 2020. Wszystkie prawa zastrzeżone!" />

    </Container>
);