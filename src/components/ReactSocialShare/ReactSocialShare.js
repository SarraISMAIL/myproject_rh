import React, {useState}  from "react";
import Captcha from " captcha-image";
import {Button , Container , Header, Segment, Grid} from "semantic-ui-react";
import {facebookShareButton,LinkedinShareButton} from "react-share";
import {FacebookIcon, LinkedinIcon} from " react-share";


function ReactSocialShare(){
    return<>
            <Container>
                <Segment>
                    <facebookShareButton url="https://www.facebook.com/Insodev-132816537055589/" quote="You can share this to your fbook account" hashtag="#React">
                        <FacebookIcon logoFillcolor="white" round={true}>
  
                        </FacebookIcon>
                    </facebookShareButton>

                    <LinkedinShareButton title="Sharing Content" url="https://www.linkedin.com/company/microsoft/">
                        <LinkedinIcon logoFillcolor="white" round={true}>

                        </LinkedinIcon>
                    </LinkedinShareButton>
                </Segment>
            </Container>
    </>;
}