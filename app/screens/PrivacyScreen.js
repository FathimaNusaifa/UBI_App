import { StyleSheet,  ScrollView } from 'react-native';
import React from 'react';
import { Block, Typography } from '../components/index';

const AboutScreen = () => {
  return (
    <Block flex={1}>
            <ScrollView>
                <Block style={styles.contentBlock}>
                    <Typography bold accent center size={20}>Privacy Policy</Typography>
                    <Typography black bold style={styles.text} size={15}>
                    APPLICATION TERMS AND CONDITIONS
                    </Typography>
                    <Typography dark  h2 style={styles.text}>
                    This Distanced Based Insurance Mobile Application (the &quot; DBI “) is made available by SenzMate IoT
                    Intelligence
                    By downloading, browsing, accessing or using the App, You, the user of the App, confirm your
                    acceptance of these Application Terms and Conditions of use (“App Terms “) and agree to be bound by
                    these. If you do not agree to these App Terms, you must immediately uninstall the App and discontinue
                    your access to the App and your use of the services offered on the App. Continued use of the App will
                    constitute acceptance of the App Terms, as may be amended from time to time.
                    </Typography>
                    <Typography black bold style={styles.text} size={18}>
                    User Registration
                    </Typography>
                    <Typography dark  h2 style={styles.text}>
                    You may be required to register, create a User Account (“Account “) and would require validating details
                    to use the App. You agree to keep your password confidential and will be fully responsible for all use of
                    your Account and password. All transactions and acts done through your Account shall be considered as
                    done by you. DBI reserves the right to remove, reclaim, or change a username you select if DBI
                    determines, in its sole discretion, that such username is inappropriate, obscene, or otherwise
                    objectionable. DBI will not be responsible for any lost or misplaced passwords or for any transactions
                    done by third Parties through your Account with or without your knowledge or for any information and /
                    or content downloaded or obtained through your Account. You undertake to indemnify DBI against all
                    losses, damages and claims arising from lost, misplaced passwords and for any transactions conducted
                    by you and any third parties through your Account and / or for any content / information downloaded or
                    obtained through your Account.
                    </Typography>
                </Block>
            </ScrollView>
        </Block>
  );
};

export default AboutScreen;

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
