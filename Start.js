

let data = {
    header: {
        logo: 'https://www.ferrari.com/ru-RU',
        menu: [
            { title: 'История', href: 'History.html' },
            { title: 'Планы', href: 'Future.html' },
            { title: 'Фильмы', href: 'Films.html' }
        ]
    },
    facts: {
        fact1: {
            title1: 'Ferrari F8 Tributo',
            text1: 'Ferrari позиционирует F8 Tributo как совершенно новую модель, однако боковины и крыша новинки визуально почти не отличаются от 488 GTB.',
            link1: 'Zayava.html'
        },
        fact2: {
            title2: 'Это первая подзаряжаемая Ferrari!',
            subtitle: 'Ferrari SF90 Stradale',
            text2: 'SF90 Stradale — первый в истории марки подзаряжаемый гибрид.',
            link2: 'Zayava.html'
          },
        fact3: {
            title3: 'Ferrari Stallone "Жеребец"',
            text3: 'Получивший название Ferrari Stallone (жеребец по-итальянски), потрясающий автомобиль сохраняет основные ценности Ferrari, такие как стремительные пропорции и скорость и воплощает из в своем дизайне.',
            link3: 'Zayava.html'
        }
    },
    footer: {
        social: [
            { title: 'Facebook', href: 'https://www.facebook.com/Ferrari', icon: 'facebook' },
            { title: 'YouTube', href: 'https://www.youtube.com/channel/UCd8iY-kEHtaB8qt8MH--zGw', icon: 'youtube' },
            { title: 'WhatsApp', href: '', icon: 'whatsapp' },
            { title: 'Snapchat', href: '', icon: 'snapchat' }
        ]
    }
};

let headerTemplate = Handlebars.compile(`
  <header class="header">
    <a href="{{header.logo}}">
      <div class="logo"></div>
    </a>
    <div class="text"></div>
    <div class="menu">
      <nav>
        {{#header.menu}}
          <li><a href="{{href}}">{{title}}</a></li>
        {{/header.menu}}
      </nav>
    </div>
    <div class="line">
      <div id="polosa" class="line1"></div>
    </div>
  </header>
`);

let factsTemplate = Handlebars.compile(`
  <main>
  <div class="prlx1"></div>
  <div class="fact1">
    <h1>{{facts.fact1.title1}}</h1>
    <p>{{facts.fact1.text1}}</p>
    <a href="{{facts.fact1.link1}}">Узнать больше</a>
  </div>
  <div class="prlx2"></div>
  <div class="fact2">
    <h1>{{facts.fact2.title2}}</h1>
    {{#subtitle}}
      <h2>{{facts.fact2.subtitle}}</h2>
    {{/subtitle}}
    <p>{{facts.fact2.text2}}</p>
    <a href="{{facts.fact2.link2}}">Узнать больше</a>
  </div>
  <div class="prlx3"></div>
  <div class="fact3">
    <h1>{{facts.fact3.title3}}</h1>
    <p>{{facts.fact3.text3}}</p>
    <a href="{{facts.fact3.link3}}">Узнать больше</a>
  </div>
  </main>
`);


let footerTemplate = Handlebars.compile(`
  <footer>
    <nav>
      {{#footer.social}}
        <a href="{{href}}"><div class="{{icon}}"></div></a>
      {{/footer.social}}
    </nav>
  </footer>
`);

let body = document.body;

let headerHtml = headerTemplate(data);
body.innerHTML += headerHtml;

let factsHtml = factsTemplate(data);
body.innerHTML += factsHtml;

let footerHtml = footerTemplate(data);
body.innerHTML += footerHtml;
window.addEventListener('scroll', function () {
    if (window.scrollY >= 0) {
        polosa.style.width = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100 + "%";
    }
});