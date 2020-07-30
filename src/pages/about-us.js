import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

import Layout from "../layouts/default"
import SEO from "../components/SEO"
import Biography from "../components/Biography"

const CallOut = styled.p`
  font-size: 17.5px;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`

const AboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="SectionTitle First">Our Mission</div>
    <div className="SectionSubTitle">
      "Give you control of <i>your marks."</i>
    </div>
    <Container className="SectionText">
      <p>
        LessonUp offers proven solutions using methods that center on action and
        activity and provide potentially lifelong benefits. We allow students to
        find power within themselves to improve the quality of their own thought
        processes, learn what they need to learn quickly and efficiently, and
        thereby improve personal productivity.
      </p>
      <p>
        Our effective learning processes and experiences rest on sound
        structure, offer much inspiration, and provide appropriate sets of
        decisions, challenges, and opportunities for accomplishment. The
        achievements feel real, and students learn the best ways to make these
        processes repeatable for themselves going forward. Systematic reviews
        and meta-analyses have consistently indicated that strategies based on
        metacognition and self-regulation lead to significant positive impact.
      </p>
      <p>
        LessonUp tutors guide students to take gradually increasing
        responsibility for their learning and to develop clearer understanding
        of what is required of them in order to succeed. Evidence indicates that
        teaching these strategies within a supportive environment can be
        particularly effective for struggling and unmotivated students.{" "}
      </p>
      <p>
        The foundation of our mission is not simply to tutor but to truly
        develop students’ skills in thinking that are refreshing, sustaining,
        and reusable throughout their lives – the ability to think!
      </p>
      <span>
        I hear and I forget. I see and I remember. I do and I understand. <br />
        -- Confucius
      </span>
    </Container>
    <div className="SectionTitle">Our Team</div>
    <Container>
      <Biography
        name="Jordan Moschovitis"
        image={require("../images/Jordan-Moschovitis.png")}
        description="Jordan has an extensive tutoring experience in mathematics and physics, helping students at all 
        levels of proficiency take charge of their learning strategies and improve their grades. Over a period of more 
        than six years, he has developed a dynamic and adaptive approach to teaching and guiding students toward more independent and more insightful learning."
      />
      <Biography
        name="Steven Maharaj"
        image={require("../images/Steven-Maharaj.png")}
        description="Steven has a Masters in Mathematics from the University of
              Melbourne. I have tutored for 7 years. Both privately
              professionally as a university tutor. My tutoring style is very
              practical. If new theory is introduced, I always insure it has
              some relevance to a bigger problem. Study hacks and megacognition
              are a big passion of mine. I hope to pass these tips and tricks on
              you in order to massively boost your marks."
      />
    </Container>
    <CallOut>
      Interested in being apart of our team? Please send us an email at{" "}
      <a href="mailto:hello@lessonup.com.au">hello@lessonup.com.au</a>.
    </CallOut>
  </Layout>
)

export default AboutUs
