import { useState } from "react";
import NewsModalbox from "./src/components/NewsModalbox";

const News = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);
  const [load, setLoad] = useState(false);
  const [hiddenItem, setHiddenItem] = useState(true);
  const [focusValue, setFocusValue] = useState("");
  const modalValueSet = (value) => {
    setModal(true);
    setModalValue(value);
  };
  const loadValueSet = (e) => {
    e.preventDefault();
    if (hiddenItem) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setHiddenItem(false);
      }, 2000);
    }
  };
  const focusValueChange = () => {
    if (!hiddenItem) {
      setFocusValue("No more articles found");
    }
  };

  return (
    <section id="news">
      {modal && <NewsModalbox close={setModal} value={modalValue} />}
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Actualités et conseils</h3>
            <h3 className="title2">Articles récents</h3>
          </div>
          {/* /Main Title */}
          {/* Blog List */}
          <div className="resumo_fn_blog_list">
            <ul className="modal_items" data-from="blog" data-count={5}>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(1)}
                  data-index={1}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/1.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>Janvier 21, 2025</p>
                    <h3>
                      <a href="#">
                      Soutien à la parentalité et coaching post-natal
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">Janvier 22, 2025</p>
                    <h3 className="fn__title">
                    Garde d'enfants et activités adaptées pour leur développement
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/1.jpg" />
                    </div>
                    <p className="fn__desc">
                    Devenir parent est une aventure extraordinaire, mais elle peut aussi être remplie de défis. Entre le manque de sommeil, les nouvelles responsabilités et les besoins de votre bébé, il est normal de se sentir dépassé. C’est là qu’interviennent le soutien à la parentalité et le coaching post-natal.

Ces services sont conçus pour accompagner les parents dans cette période de transition. Le soutien à la parentalité vous aide à comprendre les besoins de votre enfant, à établir une routine adaptée et à renforcer le lien parent-enfant. Quant au coaching post-natal, il permet d’aborder des sujets tels que l’allaitement, le sommeil du nourrisson, ou encore la gestion des émotions parentales.

Avec des conseils personnalisés et une écoute bienveillante, ces outils offrent un environnement de confiance où chaque parent peut se sentir soutenu. C’est une véritable bouffée d’air frais pour mieux vivre les premiers mois avec bébé
                    </p>
                    <p className="fn__desc">
                    Devenir parent est une aventure extraordinaire, mais elle peut aussi être remplie de défis. Entre le manque de sommeil, les nouvelles responsabilités et les besoins de votre bébé, il est normal de se sentir dépassé. C’est là qu’interviennent le soutien à la parentalité et le coaching post-natal.

Ces services sont conçus pour accompagner les parents dans cette période de transition. Le soutien à la parentalité vous aide à comprendre les besoins de votre enfant, à établir une routine adaptée et à renforcer le lien parent-enfant. Quant au coaching post-natal, il permet d’aborder des sujets tels que l’allaitement, le sommeil du nourrisson, ou encore la gestion des émotions parentales.

Avec des conseils personnalisés et une écoute bienveillante, ces outils offrent un environnement de confiance où chaque parent peut se sentir soutenu. C’est une véritable bouffée d’air frais pour mieux vivre les premiers mois avec bébé
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(2)}
                  data-index={2}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/2.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>Janvier 17, 2025</p>
                    <h3>
                      <a href="#">
                      Ateliers créatifs et animations pour enfants (soirées, week-ends, vacances)
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">Janvier 24, 2025</p>
                    <h3 className="fn__title">
                    Aide personnalisée pour les mamans après la maternité
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/2.jpg" />
                    </div>
                    <p className="fn__desc">
                    Les enfants ont une imagination débordante, et quoi de mieux que des ateliers créatifs pour leur permettre de l’exprimer ? Ces activités sont idéales pour les occuper pendant les soirées, les week-ends ou les vacances, tout en leur offrant une expérience éducative et ludique.

Les ateliers créatifs peuvent inclure des activités comme la peinture, le modelage, la fabrication d’objets recyclés, ou encore des initiations au théâtre. Ils stimulent la créativité, renforcent la confiance en soi et favorisent la socialisation avec d’autres enfants.

Pour les parents, c’est aussi une solution idéale pour se libérer un peu de temps tout en offrant à leurs enfants un moment de plaisir et d’apprentissage. Qu’il s’agisse d’une soirée à thème ou d’un programme spécial vacances, ces animations laissent toujours des souvenirs mémorables aux petits participants.
                    </p>
                    <p className="fn__desc">
                    Les enfants ont une imagination débordante, et quoi de mieux que des ateliers créatifs pour leur permettre de l’exprimer ? Ces activités sont idéales pour les occuper pendant les soirées, les week-ends ou les vacances, tout en leur offrant une expérience éducative et ludique.

Les ateliers créatifs peuvent inclure des activités comme la peinture, le modelage, la fabrication d’objets recyclés, ou encore des initiations au théâtre. Ils stimulent la créativité, renforcent la confiance en soi et favorisent la socialisation avec d’autres enfants.

Pour les parents, c’est aussi une solution idéale pour se libérer un peu de temps tout en offrant à leurs enfants un moment de plaisir et d’apprentissage. Qu’il s’agisse d’une soirée à thème ou d’un programme spécial vacances, ces animations laissent toujours des souvenirs mémorables aux petits participants.
                    </p>
                    <p className="fn__desc">
                    Les enfants ont une imagination débordante, et quoi de mieux que des ateliers créatifs pour leur permettre de l’exprimer ? Ces activités sont idéales pour les occuper pendant les soirées, les week-ends ou les vacances, tout en leur offrant une expérience éducative et ludique.

Les ateliers créatifs peuvent inclure des activités comme la peinture, le modelage, la fabrication d’objets recyclés, ou encore des initiations au théâtre. Ils stimulent la créativité, renforcent la confiance en soi et favorisent la socialisation avec d’autres enfants.

Pour les parents, c’est aussi une solution idéale pour se libérer un peu de temps tout en offrant à leurs enfants un moment de plaisir et d’apprentissage. Qu’il s’agisse d’une soirée à thème ou d’un programme spécial vacances, ces animations laissent toujours des souvenirs mémorables aux petits participants.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(3)}
                  data-index={3}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/3.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>Fevrier 04, 2025</p>
                    <h3>
                      <a href="#">
                      L’importance du jeu dans le développement des enfants
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">Mars 04, 2025</p>
                    <h3 className="fn__title">
                    Conseils pratiques pour gérer les transitions importantes chez l’enfant
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/3.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(4)}
                  data-index={4}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/4.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 18, 2025</p>
                    <h3>
                      <a href="#">
                        {`comment choisir les activités adaptées à chaque âge`}
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 18, 2025</p>
                    <h3 className="fn__title">
                      {` Les bienfaits de la nature sur le bien-être et le développement des enfants`}
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/4.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(5)}
                  data-index={5}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/5.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 05, 2025</p>
                    <h3>
                      <a href="#">
                      Aide personnalisée pour les mamans après la maternité
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 25, 2025</p>
                    <h3 className="fn__title">
                      Forgive Yourself for Not Being Perfect. Then Do It Again
                      Tomorrow.
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/5.jpg" />
                    </div>
                    <p className="fn__desc">
                    Pour les 0-2 ans : Privilégiez des activités sensorielles comme la manipulation d’objets de différentes textures, ou les jeux qui encouragent le mouvement, comme le rampement. Ces activités aident à stimuler leurs sens et à développer leur motricité.
Pour les 3-5 ans : Les activités créatives comme le dessin, la peinture ou les jeux d’imitation (cuisiner, jouer au médecin) sont idéales. Elles renforcent leur imagination et leurs habiletés sociales.
Pour les 6-8 ans : À cet âge, les enfants aiment relever des défis. Proposez des jeux de construction, des énigmes ou encore des activités sportives pour développer leurs compétences physiques et cognitives.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                      Sed porttitor augue erat, vitae convallis odio viverra id.
                      In nec finibus elit. Nullam ac sodales nunc, vel sagittis
                      elit. Ut condimentum ex ipsum, eu ornare odio aliquam eu.
                      Ut iaculis eros quam, eu bibendum tellus convallis quis.
                      Donec sapien risus, consequat ut magna nec, interdum porta
                      nisl. Vivamus pulvinar hendrerit finibus. Nunc molestie
                      lacinia risus, id mattis nunc euismod ac. Nam eu orci
                      felis. Quisque ut elementum quam. Vivamus pulvinar nisi
                      nunc, ut faucibus turpis tincidunt eget. Fusce nec ex quis
                      odio laoreet consequat. Duis faucibus metus id feugiat
                      sodales. Sed eu ligula eget quam ultricies tincidunt.
                      Morbi sodales nunc ultrices justo pellentesque, ac mattis
                      mi sagittis. Morbi ut consectetur neque.
                    </p>
                  </div>
                </div>
              </li>
              <li className={!hiddenItem ? "" : "be_animated"}>
                <div
                  className="item modal_item"
                  onClick={() => modalValueSet(6)}
                  data-index={6}
                >
                  <div className="img_holder">
                    <img src="img/thumb/square.jpg" alt="image" />
                    <div className="abs_img" data-bg-img="img/blog/6.jpg" />
                  </div>
                  <div className="title_holder">
                    <p>August 01, 2021</p>
                    <h3>
                      <a href="#">
                      Astuces pour occuper les enfants à la maison
                      </a>
                    </h3>
                  </div>
                  <div className="fn__hidden">
                    <p className="fn__cat">August 01, 2025</p>
                    <h3 className="fn__title">
                      Why Decorating Your Home Is Good for Your Mental Health
                    </h3>
                    <div className="img_holder">
                      <img src="img/thumb/square.jpg" alt="image" />
                      <div className="abs_img" data-bg-img="img/blog/6.jpg" />
                    </div>
                    <p className="fn__desc">
                      Sed ornare tellus a odio bibendum, at tristique sapien
                      malesuada. Proin sagittis maximus accumsan. Class aptent
                      taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Quisque gravida quam sit amet
                      elit varius tempor. Pellentesque purus eros, blandit eu
                      mollis vel, commodo eget orci. Proin vel hendrerit ex.
                      Vivamus ut ex at nunc consectetur efficitur ut quis est.
                      Proin posuere orci eget vulputate fringilla. Curabitur
                      placerat massa eget efficitur cursus. Sed sollicitudin
                      rhoncus blandit. Nam accumsan vestibulum enim. Sed rutrum
                      eu leo pellentesque lobortis. Integer ornare fringilla
                      arcu, eu mattis risus convallis in.
                    </p>
                    <p className="fn__desc">
                      Quisque dui metus, eleifend at enim ac, imperdiet sagittis
                      dolor. Vestibulum ipsum quam, feugiat non velit sit amet,
                      pulvinar varius nisl. Mauris tristique, ipsum sit amet
                      lacinia congue, mauris magna tempus nibh, in mollis eros
                      enim a tortor. Morbi enim arcu, tristique vitae mi nec,
                      hendrerit pharetra metus. Phasellus id feugiat purus. In
                      vel elit eu lacus ultrices feugiat. Etiam at aliquet mi.
                      Nunc sit amet libero sit amet lectus pellentesque
                      sagittis. Curabitur blandit ante quis erat dapibus
                      viverra. Maecenas consequat pulvinar pulvinar. Donec in
                      aliquam arcu. Donec eu laoreet dolor. Ut nisi lectus,
                      pulvinar ac mattis quis, pretium ac nulla. Morbi sed
                      ligula ultrices, ornare mauris id, auctor arcu. Sed
                      pellentesque ex sed erat faucibus, ultrices vehicula ex
                      dapibus. Aenean venenatis metus eros, vel faucibus lorem
                      porttitor eu.
                    </p>
                    <p className="fn__desc">
                    Pour les 0-2 ans : Privilégiez des activités sensorielles comme la manipulation d’objets de différentes textures, ou les jeux qui encouragent le mouvement, comme le rampement. Ces activités aident à stimuler leurs sens et à développer leur motricité.
Pour les 3-5 ans : Les activités créatives comme le dessin, la peinture ou les jeux d’imitation (cuisiner, jouer au médecin) sont idéales. Elles renforcent leur imagination et leurs habiletés sociales.
Pour les 6-8 ans : À cet âge, les enfants aiment relever des défis. Proposez des jeux de construction, des énigmes ou encore des activités sportives pour développer leurs compétences physiques et cognitives.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="clearfix" />
            <div className="load_more">
              <a
                href="#"
                data-done="Done"
                className={load ? "loading" : ""}
                data-no="No more articles found"
                onClick={(e) => loadValueSet(e)}
                onFocus={(e) => focusValueChange()}
              >
                <span className="text">
                  {hiddenItem
                    ? "Load More Articles"
                    : focusValue
                    ? focusValue
                    : "Done"}
                </span>
                <span className="fn__pulse">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
            </div>
          </div>
          {/* /Blog List */}
        </div>
      </div>
    </section>
  );
};

export default News;
