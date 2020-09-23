import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Profile from "../components/profile";
import ZoomBanner from "../components/ZoomBanner";
import { Heading1, Section } from "../components/common";

const AlumniPage = ({ data }) => {
  const profiles = [
    {
      name: "Naomi Day",
      avatar: data.naomid.childImageSharp.fluid,
      excerpt: (
        <p>
          Naomi Day is a queer Black woman who enjoys interrogating the strange
          ways her mixed-race experience has shaped how she moves through the
          world. She primarily writes short Afro-centric futurist fiction, and
          her work has appeared in Black Warrior Review and The Seventh Wave.
          She’s a part of the Clarion West ghost class of 2020/21. She much
          prefers the nomadic life, finding home in cities from Chicago to
          London.
        </p>
      ),
    },
    {
      name: "Mubanga Kaimamukwento",
      avatar: data.mubangak.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Mubanga Kalimamukwento is an award-winning novelist and short-story
            writer from Zambia. Her first novel, The Mourning Bird won the
            Dinaane Debut Fiction Award 2019. The same year, she won the Kalemba
            Short Story Prize, was shortlisted for the SyncityNG Anthology and
            the Bristol Short Story Prize.
          </p>
          <p>
            She's been published in journals in France, England, Canada, the
            USA, Zambia, Nigeria and Australia. She has a law degree from Zambia
            and will graduate from the University of Minnesota's LLM class in
            2020. She's a Hubert H. Humphrey (Fulbright) Fellow and a Young
            African Leadership Initiative Fellow.
          </p>
        </span>
      ),
    },
    {
      name: "Eboni J. Dunbar",
      avatar: data.ebonid.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Eboni J. DUnbar (She/her) is a queer, black woman who writes queer
            and black speculative fiction. She resides in the San Francisco Bay
            Area with her partner. She received her BA from Macalester College
            in English and her MFA in Creative Writing from Mills College. She
            is a VONA Alum, a former associate editor for PodCastle, a managing
            editor for FIYAH Literary Magazine and a freelance reviewer.
          </p>
          <p>
            Her work can be found in FIYAH Literary Magazine, Drabblecast,
            Anathema: Spec from the margins and Nightlight Podcast. She also has
            a forthcoming novella from Neon Hemlock, coming Fall 2020, which can
            be pre-ordered from Neon Hemlock’s website.
          </p>
          <p>
            She will also be leading a session at Voodoonauts Summer Workshop on
            Publishing Short SFF.
          </p>
        </span>
      ),
    },
    {
      name: "Patty Nicole Johnson",
      avatar: data.pattyj.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Patty Nicole Johnson is a Black and Puerto Rican content marketer
            and science fiction writer. In her Chicago bungalow, she weaponizes
            time travel, holograms, multiverses and more to envision a more
            equitable society. Her work can be found at New American Legends and
            On the Seawall. She primarily writes flash fiction and short
            stories, yet she’s editing her debut novella, The Rhythm of
            Reveries. Read her work at pattynjohnson.com, or find her on Twitter
            @pattynjohnson
          </p>
        </span>
      ),
    },
    {
      name: "Katleho Ramafalo",
      avatar: data.katlehor.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Katleho Ramafalo is a Masters student from the University of Cape
            Town specialising in Theories of Justice and Inequality. Her
            academic career began in 2015 at Rhodes University where she
            graduated with a BA in Drama and Television Journalism. As a theatre
            and film scholar, her passion is to tell a utopian story that may or
            may not be her reality. Her story telling begins with the adaptation
            of myths, folklore and fairy tales into a contemporary setting,
            using a feminist lens. As a South African creative, she uses Greek
            myths to explore that horrors of gender based violence experienced
            by the women and children of South Africa on a daily basis.
          </p>
        </span>
      ),
    },
    {
      name: "Emmalia Harrington",
      avatar: data.emmaliah.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Emmalia Harrington (she/her) is a disabled QWOC with a deep love of
            speculative fiction. When she's not reading or writing, she's often
            sewing, cooking or managing cats. She's an Associate Editor at
            Podcastle and an Acquiring Editor at FIYAH. Her work can be found at
            FIYAH, Glittership, Decoded and other venues. You can find her on
            Twitter at @EmmaliaWrites
          </p>
        </span>
      ),
    },
    {
      name: "Jasmine H. Wade",
      avatar: data.jasminew.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Jasmine H. Wade is a speculative fiction writer in Northern
            California. Her short stories have appeared in Drunken Boat, TAYO
            Literary Magazine, The Copperfield Review and others. She is an
            alumna of the VONA/Voices workshop and Mills College’s MFA program.
            She won the 2016 Edward P. Jones Short Story Contest and was a
            finalist for the Hurston/Wright Founding Members Award for College
            Writers. She is a PhD candidate in Cultural Studies at the
            University of California, Davis, where she studies the intersections
            between Afrofuturism and Indigenous futurisms. She is also
            Co-Creative Director of Ancestral Futures, a non-profit organization
            that uplifts the voices of BIPOC speculative fiction writers.
          </p>
        </span>
      ),
    },
    {
      name: "Siju Falade",
      avatar: data.sijuf.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Siju Falade is a human rights lawyer/advocate and an aspiring writer
            who received her B.A. from Cornell University where she concentrated
            in African Diasporan Literature. Siju is a huge fan of Young Adult
            Fantasy and Speculative Fiction, and actively seeks out BIPOC
            stories because representation matters.
          </p>
          <p>
            Having studied the intersection between law and literature, Siju
            strongly believes that the “best literature has a way of forcing you
            into another’s shoes, it demands empathy” in a way that can serve as
            a catalyst for societal change and justice.
          </p>
          <p>
            When she’s not reading, writing, or listening to audiobooks, she can
            be found bingeing K-dramas, eating, or talking to friends for hours.
            You can read some of her poetry on @thecrownspeaks. She is
            incredibly excited to be a part of the inaugural Voodoonauts class
            and looks forward to meeting so many talented black writers.
          </p>
        </span>
      ),
    },
    {
      name: "Rutendo Chidzodzo",
      avatar: data.rutendoc.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Rutendo is a writer from Zimbabwe and has always been drawn to the
            fantastical. She graduated with a BA in Creative Writing and Film
            Studies. She is the 2020 recipient of the Ladies' Literary Club
            award.
          </p>
        </span>
      ),
    },
    {
      name: "Sean Avery",
      avatar: data.seana.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Sean Avery (he/they) is a rapper, poet & teaching artist based in
            Arizona. Their work integrates rap, poetry, and theater to explore
            how Black masculinity is projected onto their body. They strive for
            an authentic performance of self, in hopes that they’ll inspire
            others to examine their own identities.
          </p>
          <p>
            Avery has shared stages with Saul Williams, J. Ivy, and Lemon
            Anderson. Their work’s been featured in Afropunk, Blavity, the
            Chicago Hip-Hop Theater Festival, and the Tucson Poetry Festival.
            Currently, Avery teaches throughout the Valley. Their album and play
            skinnyblk, and all of their work, can be found at
            superseanavery.com.
          </p>
        </span>
      ),
    },
    {
      name: "Maya Beck",
      avatar: data.mayab.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Maya Beck is a Cali transplant, lapsed Muslim, covert otaku,
            part-time hermit, broke blipster, and socially-anxious social
            justice bard. She is also an alum of writing fellowships and
            programs by VONA, Kimbilio, Tin House, We Need Diverse Books, The
            Loft Literary Center, the Givens Foundation, and more. Her writing
            has been nominated for the Pushcart and the Best of the Net as well
            as a Minnesota State Arts Board Grant and an MRAC Next Step Fund
            Grant. Born of Bantu people on Kumeyaay land, she is also petmom to
            a sassy bunny named Blossom and loves Pokemon and Daft Punk.
          </p>
        </span>
      ),
    },
    {
      name: "Olutola Owolabi",
      avatar: data.olutolao.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Olutola Owolabi is a second year medical student of the University
            of Ibadan. He reads everything but has been consuming more of
            fantasy, thrillers, and human psychology lately. He has a knack for
            3Dlizing the African culture in his stories which he tried to
            portray in his just finished Afrofuturistic novel "Doom Around US".
            When he is not writing or thinking of another story, he can be found
            devouring programming contents or dancing to some good music!
          </p>
        </span>
      ),
    },
    {
      name: "Berttila Kithia",
      avatar: data.berttilak.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Berttila Kithia is a Kenyan author currently based in New York City.
            She is pursuing a BA in English with a concentration in Professional
            Writing at Daemen College. She is an alumnus of Storymoja YA
            writer's workshop. Her poems have been featured at AMKA, a forum for
            Kenyan women writers. She has also written a children's book series
            expected to be published in 2021. Her recent poem 'I Can't Breathe'
            won the Daemen College Apart Together online exposition in the
            literature category.
          </p>
        </span>
      ),
    },
    {
      name: "Wangũi wa Kamonji",
      avatar: data.wanguik.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Wangũi wa Kamonji is called to be a retriever and bearer of
            indigenous Afrikan lifeways and practices for the regeneration of
            the continent. This manifests through research using academic and
            indigenous methods, Afrikan dance and movement practice,
            storytelling, and facilitating public spaces for critical
            consciousness and decolonial transformations.
          </p>
          <p>
            Wangũi centres Afrika, ancestrality and the Earth in her
            storytelling. This pours forth in the form of short fiction, poetry,
            song, and non-fiction essays, as well as a recently discovered love
            for oral storytelling performance.
          </p>
          <p>
            Her children’s story “The Giraffes of the Desert” appears in the
            anthology “Story, Story, Story Come”. Her essays have been published
            on The Elephant, Brainstorm Kenya, and Transitions Network.
          </p>
          <p>
            She integrates poetry into her non-fiction writing (including her
            Masters dissertation to trouble knowledge borders) and holds close
            Micere Githae Mugo’s call to find the songs lying around us and sing
            them for all to hear. She is based in Ongata Rongai, East Afrika.
            Find her @_fromtheroots
          </p>
        </span>
      ),
    },
    {
      name: "Tina Jenkins Bell",
      avatar: data.tinab.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Tina Jenkins Bell is a published fiction writer, playwright,
            freelance journalist, literary activist, and academic. Bell’s sci-fi
            short story, To the Moon and Back was nominated for a 2020 Illinois
            Arts Council Literary Award. Her mini memoir, Devil’s Alley,
            collaborative hybrid Looking for the Good Boy, Yummy and short
            story, The Last Supper were anthologized in various publications
            between 2017 through 2019. A dramatic reading for her play, Cut the
            Baby in Half, was produced at the Greenline Performing Arts Center
            in Chicago last year. And currently, Bell anticipates the
            publication of her novel Mud Pies, which addresses cultural issues
            as it relates to grief, mental health and redlining the urban out of
            cities. Currently, Bell has been asked to compile a proposal for an
            anthology focusing on Gary, Indiana. She is working on her second
            novel, Family Legacies.
          </p>
        </span>
      ),
    },
    {
      name: "Florence Ofori",
      avatar: null,
      excerpt: (
        <span>
          <p>
            Florence Ofori is a budding writer of fiction, poetry, and sometimes
            nonfiction. She weaves strings of issues relating to misogyny and
            minorities into her stories and poems. She recently received an
            award as a short fiction finalist for the Samira Bawumia Literature
            Prize and is now working meticulously towards honing her craft and
            talent. When she is not writing, Florence loves to try out new
            recipes, binge watch youtube videos, do yoga, watch memes, and
            stream Netflix. "Time enjoyed is never really wasted," she likes to
            say.
          </p>
        </span>
      ),
    },
    {
      name: "Lysz Flo",
      avatar: data.lyszf.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Lysz Flo is a, trilingual spoken word artist, author of fiction and
            poetry, member of The Estuary Collective, and a podcast host of
            Creatively Exposed who released her poetry novel Soliloquy of an Ice
            Queen, March 2020.
          </p>
        </span>
      ),
    },
    {
      name: "Elaine Musiwa",
      avatar: data.elainem.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Elaine Musiwa is a fiction writer and long-distance biking
            enthusiast based in New York City.
          </p>
        </span>
      ),
    },
    {
      name: "Raeshelle Rose",
      avatar: data.raesheller.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Raeshelle Rose is a gamer, a huge nerd for mythology and a lover of
            bad jokes. Hailing from the scorching parallel universe that is
            Texas, she writes queer fiction set in fantastical worlds full of
            mystery and adventure. She is currently working on several short
            stories along with her debut book, the first installment of a
            sprawling mystery series filled with magic and court intrigue.
          </p>
        </span>
      ),
    },
    {
      name: "Audrey T. Williams",
      avatar: data.audreyw.childImageSharp.fluid,
      excerpt: (
        <span>
          <p>
            Audrey grew up on the North Carolina coast and is now living in the
            San Francisco Bay Area. She earned her MFA in Creative Writing from
            California College of the Arts and works full-time as a Copy
            Supervisor for a healthcare advertising agency.
          </p>
          <p>
            Audrey centers her creative work at the intersection of: Story
            craft, spiritual practice and self-care, honoring of ancestors,
            Black feminist research scholarship, as well as liberation and
            rematriation mindfulness.
          </p>
          <p>
            A true Virgo, Audrey is grateful to be of service to her communities
            and actively works to bridge emerging writers to professional
            development and publication opportunities.
          </p>
          <p>
            Audrey’s first poetry chapbook, Where I Dream, is available from
            Alley Cat Bookstore in the Mission District of San Francisco. Learn
            more: OfChutneyandChitlins.com
          </p>
        </span>
      ),
    },
    {
      name: "Wallace Louis ",
      avatar: null,
      excerpt: <span></span>,
    },
  ];
  return (
    <Layout>
      <SEO title="Alumni" />
      <div style={{ maxWidth: `100%`, marginBottom: `1.45rem` }}>
        <ZoomBanner />
      </div>
      <br />
      <Heading1>Alumni</Heading1>
      {profiles
        .sort((a, b) =>
          a?.name?.toLowerCase().localeCompare(b?.name?.toLowerCase())
        )
        .map(({ name, avatar, excerpt }) => (
          <Section key={name}>
            <Profile name={name} avatar={avatar} excerpt={excerpt} />
          </Section>
        ))}
    </Layout>
  );
};

export default AlumniPage;

export const query = graphql`
  {
    audreyw: file(
      relativePath: { eq: "images/alumni/AudreyWilliams_Headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    emmaliah: file(
      relativePath: { eq: "images/alumni/EmmaliaHarrington_Headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mayab: file(relativePath: { eq: "images/alumni/MayaBeck_Headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    pattyj: file(
      relativePath: { eq: "images/alumni/PattyNicoleJohnson-Headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sijuf: file(relativePath: { eq: "images/alumni/SijuWade_Headshot.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    berttilak: file(
      relativePath: { eq: "images/alumni/Berttila_Kithia_Headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jasminew: file(relativePath: { eq: "images/alumni/JasmineWade.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mubangak: file(
      relativePath: { eq: "images/alumni/MubangaKalimamukwentoHeadshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    raesheller: file(
      relativePath: { eq: "images/alumni/Raeshelle_Rose_Headshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tinab: file(relativePath: { eq: "images/alumni/Tina_Jenkins_Bell.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ebonid: file(
      relativePath: { eq: "images/alumni/EboniDunbar_Headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    katlehor: file(
      relativePath: { eq: "images/alumni/KatlehoRamafalo_Headshot.jpeg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    naomid: file(relativePath: { eq: "images/alumni/Naomi_Day_headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rutendoc: file(
      relativePath: { eq: "images/alumni/RutendoChidzodzo_headshot.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wanguik: file(
      relativePath: { eq: "images/alumni/Wangũi_wa_Kamonji_Headshot.JPG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elainem: file(
      relativePath: { eq: "images/alumni/Elaine_Musiwa_Headshot.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lyszf: file(relativePath: { eq: "images/alumni/Lysz_Flo_Headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    olutolao: file(relativePath: { eq: "images/alumni/Olutola_Owolabi.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seana: file(relativePath: { eq: "images/alumni/SeanAvery_Headshot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
