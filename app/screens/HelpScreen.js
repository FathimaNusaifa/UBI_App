import { StyleSheet,  ScrollView } from 'react-native';
import React from 'react';
import { Block, Typography } from '../components/index';

const HelpScreen = () => {
  return (
    <Block flex={1}>
            <ScrollView>
                <Block style={styles.contentBlock}>
                    <Typography bold accent center size={20}>Help</Typography>
                    <Typography black bold style={styles.text}>
                    Contact Us
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    If you have any questions regarding our App, you can email us info@senzmate.com
                    </Typography>
                    <Typography black bold style={styles.text}>
                    App and Related Terms
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    Depending on the version of the Application you have downloaded, these App Terms incorporate
                    Apple&#39;s or Google Android&#39;s terms and conditions and privacy policies (“Platform Terms “) . If there is
                    any conflict between these App Terms and the Platform Terms, then these App Terms will prevail. We
                    may from time to time vary these App Terms. Please check these App Terms regularly to ensure you are
                    aware of any variations made by us. If you continue to use this App, you are deemed to have accepted
                    such variations. If you do not agree to such variations, you should not use the App.
                    </Typography>
                    <Typography black bold style={styles.text}>
                    Prohibited Uses
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    You agree not to use the App in any way that:
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    is unlawful, illegal or unauthorized
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    is defamatory of any other person
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    is obscene or offensive
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    infringes any copyright, database right or trademark of any other person
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    is likely to harass, upset, embarrass, alarm or annoy any other person.
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    is likely to disrupt our service in any way or advocates, promotes or assists any unlawful act such as (by
way of example only ) copyright infringement or computer misuse .
                    </Typography>
                </Block>
            </ScrollView>
        </Block>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
},
contentBlock: {
    padding: 15
},
text: {
    textAlign: 'justify',
    marginBottom: 5
}
});
