import { useEffect, useState } from "react";
import { dataImage } from "../utilits";

const NewsModalbox = ({ close, value }) => {
  const data = [
    {
      title: "Soutien à la parentalité et coaching post-natal",
      date: "Janvier 21, 2025",
      desc: [
        {
          p: "Devenir parent est une aventure extraordinaire, mais elle peut aussi être remplie de défis. Entre le manque de sommeil, les nouvelles responsabilités et les besoins de votre bébé, il est normal de se sentir dépassé. C’est là qu’interviennent le soutien à la parentalité et le coaching post-natal. Ces services sont conçus pour accompagner les parents dans cette période de transition. Le soutien à la parentalité vous aide à comprendre les besoins de votre enfant, à établir une routine adaptée et à renforcer le lien parent-enfant. Quant au coaching post-natal, il permet d’aborder des sujets tels que l’allaitement, le sommeil du nourrisson, ou encore la gestion des émotions parentales.Avec des conseils personnalisés et une écoute bienveillante, ces outils offrent un environnement de confiance où chaque parent peut se sentir soutenu. C’est une véritable bouffée d’air frais pour mieux vivre les premiers mois avec bébé."
        }
      ]
    },
    {
      title: "Garde d'enfants et activités adaptées pour leur développement",
      date: "Janvier 17, 2025",
      desc: [
        {
          p: "Garde d'enfants et activités adaptées pour leur développement . La garde d'enfants ne se limite pas à la surveillance : c'est une opportunité pour stimuler leur développement. Des activités adaptées à leur âge, comme les jeux d’éveil sensoriel pour les tout-petits ou les ateliers créatifs pour les plus grands, favorisent l’imagination, la motricité et les interactions sociales . Ces activités renforcent leur confiance en eux et posent les bases d’un apprentissage solide. Un environnement sécurisant, avec des encadrants attentifs, permet aux enfants de s’épanouir pleinement. Offrir une garde enrichissante, c’est investir dans leur bien-être et leur avenir."
        }
      ]
    },
    {
      title: "L’importance du jeu dans le développement des enfants",
      date: "Février 04, 2025",
      desc: [
        {
          p: "Le jeu est bien plus qu’un simple divertissement pour les enfants : c’est un outil essentiel pour leur développement. Qu’il soit symbolique, coopératif, ou sensoriel, le jeu permet à l’enfant de découvrir le monde, d’explorer ses émotions et d’apprendre des compétences sociales . Les activités ludiques contribuent au développement de la motricité, de la créativité, et même du langage. Par exemple, les jeux de construction renforcent la coordination et la résolution de problèmes, tandis que les jeux de rôle permettent d’explorer différentes perspectives . En jouant, les enfants développent également leur résilience et apprennent à gérer les échecs ou les conflits. Pour les parents, il est important de valoriser le jeu libre tout en proposant des activités adaptées à l’âge et aux besoins de l’enfant."
        }
      ]
    },
    {
      title: "Comment choisir les activités adaptées à chaque âge",
      date: "Août 18, 2025",
      desc: [
        {
          p: " Chaque âge a ses besoins spécifiques, et il est important de proposer des activités adaptées au stade de développement de l’enfant. Mais comment faire les bons choix ? Pour les 0-2 ans : Privilégiez des activités sensorielles comme la manipulation d’objets de différentes textures, ou les jeux qui encouragent le mouvement, comme le rampement. Ces activités aident à stimuler leurs sens et à développer leur motricité . Pour les 3-5 ans : Les activités créatives comme le dessin, la peinture ou les jeux d’imitation (cuisiner, jouer au médecin) sont idéales. Elles renforcent leur imagination et leurs habiletés sociales . Pour les 6-8 ans : À cet âge, les enfants aiment relever des défis. Proposez des jeux de construction, des énigmes ou encore des activités sportives pour développer leurs compétences physiques et cognitives."
        }
      ]
    },
    {
      title: "Aide personnalisée pour les mamans après la maternité",
      date: "Août 05, 2025",
      desc: [
        {
          p: "Après la maternité, les mamans doivent non seulement relever les défis liés à leur propre récupération physique et émotionnelle, mais aussi s’adapter aux besoins éducatifs croissants de leurs enfants après la maternelle. Ce passage peut être source de stress, car les premières étapes de l’éducation scolaire exigent une attention particulière. Les difficultés rencontrées incluent souvent l’accompagnement des devoirs, la gestion des apprentissages, et la compréhension des programmes scolaires. Un soutien personnalisé peut aider les mamans à s’organiser : des conseils pour créer un environnement propice à l’étude, des astuces pour rendre les apprentissages ludiques et des moments dédiés pour répondre aux besoins spécifiques de l’enfant. En parallèle, solliciter une aide pratique, comme un soutien scolaire ou des ressources adaptées, peut alléger la charge mentale des mamans et leur permettre de concilier leur rôle maternel avec sérénité."
    }]},
    {
      title: "Astuces pour occuper les enfants à la maison",
      date: "Août 01, 2025",
      desc: [
        {
          p: "Pour gérer efficacement le dérangement des enfants à la maison, il est essentiel de mettre en place des astuces simples mais efficaces. Tout d’abord, instaurez une routine claire : les enfants ont besoin de repères, et savoir à quel moment jouer, étudier ou se reposer peut réduire leur agitation. Ensuite, préparez un espace dédié aux activités : une table avec du matériel de bricolage, des jeux éducatifs ou des puzzles peut les occuper de manière autonome. Pour les moments où vous avez besoin de calme, proposez des activités qui demandent de la concentration, comme le dessin ou la lecture. Enfin, n’hésitez pas à leur confier de petites responsabilités adaptées à leur âge, comme ranger leurs jouets ou aider en cuisine, ce qui les occupera tout en renforçant leur sentiment d’autonomie. Ces astuces permettent non seulement de canaliser leur énergie, mais aussi de préserver l’harmonie à la maison."
     } ]
    }
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className="resumo_fn_modalbox opened">
      <a
        className="extra_closer"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className="box_inner">
        <a
          className="closer"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className="modal_content">
          <div className="modal_in">
            {data.map(
              (d, i) =>
                i + 1 === index && (
                  <div key={d.title}>
                    <p className="fn__cat">{d.date}</p>
                    <h3 className="fn__title">{d.title}</h3>
                    <div className="img_holder">
                      <img src="/img/thumb/square.jpg" alt="" />
                      <div
                        className="abs_img"
                        data-bg-img={`/img/blog/${index}.jpg`}
                      />
                    </div>
                    {d.desc.map((des, j) => (
                      <p key={j} className="fn__desc">
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>
          <div className="fn__nav" data-from="portfolio" data-index="1">
            <a
              href="#"
              className="prev"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index === 1 ? data.length : index - 1);
              }}
            >
              <span className="text">Prev</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
            <a
              href="#"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                setIndex(index === data.length ? 1 : index + 1);
              }}
            >
              <span className="text">Next</span>
              <span className="arrow_wrapper">
                <span className="arrow"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModalbox;
