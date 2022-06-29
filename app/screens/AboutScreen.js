import { StyleSheet,  ScrollView } from 'react-native';
import React from 'react';
import { Block, Typography } from '../components/index';

const AboutScreen = () => {
  return (
    <Block flex={1}>
            <ScrollView>
                <Block style={styles.contentBlock}>
                    <Typography bold accent center size={20}>About Us</Typography>
                    <Typography dark  h2 style={styles.text}>
                    Distanced Based Car Insurance (DBI) or Telematics insurance is a fast-growing innovative technological
                    development in the motor insurance industry. It is a newly launched car insurance scheme where the
                    data about the driver&#39;s driving habit is fetched and based on that the premium rate is decided. This
                    concept mainly works based on the live data of the driver acquired with the aid of telematics, RF
                    technology and GPS to understand the driving nature and driving practices of the drivers which will be
                    directly transmitted to the insurance company offering insurance as per the calculation for every single
                    driver. The insurance companies collect these data from the reading of the odometers and other in-
                    vehicle telecommunication devices which are installed in the cars by default.
                    </Typography>
                    <Typography dark h2 style={styles.text}>
                    In this distance-based insurance application, the insurance policy holder will first obtain an insurance
                    cover which covers a particular number of kilometers (limit) per month for a minimum annual premium.
                    When the policy holder drives beyond the limit, the GPS tracker on the policy holder&#39;s mobile phone will
                    be used to calculate the distance traveled by the vehicle. The insured then has to pay for every
                    kilometer he travels exceeding the limit based on the rate per km defined in the policy.
                    </Typography>
                    <Typography dark  h2 style={styles.text}>
                    In this Distance-Based Insurance Application, the insurance policy holder will obtain the policy directly
                    from the insurance company. The insurance company would offer this policy with three different
                    distance coverages or limits, i.e., 200km per month, 400km per month and 600km per month. The policy
                    holder will pay an annual premium for this distance coverage directly to the insurance company. Every
                    month, the policy holder will enjoy traveling up to the limit specified in the policy, i.e., 200km, 400km or
                    600km. When the policy holder needs to travel beyond this limit, the policy holder has to pay for every
                    kilometer based on the rates specified in the policy.
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
