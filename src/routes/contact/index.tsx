import { Group, Stack, Text, useMantineTheme } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { TargetIcon } from "@modulz/radix-icons"
import Copyright from "../projects/btm-banner/copyright"
import { useStyles } from "./contact.styles"

const ContactComp = () => {
    const { classes } = useStyles()
    const theme = useMantineTheme()
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);
    const titleSize = isMobile ? 34 : 56
    const align = isMobile ? "center" : "unset"
    return (
        <div className={classes.wrapper}>
            <Group onClick={() => { window.open('https://www.google.com/maps/place/Homecult+interior+design/@50.4157609,30.5288754,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cfecf1b93049:0x3799d0c010a275e1!8m2!3d50.4157609!4d30.5310641') }} align={align} className={classes.target}>
                <TargetIcon width={30} height={30} color="rgba(233, 106, 91, 0.7)" />
                <Stack align={align}>
                    <Text align={align} size={14} color={'white'}>HOMECULT OFFICE CENTRAL PARK</Text>
                    <Text align={align} color={'white'} size={12} className={classes.lightText}>Kyiv, st. John McCain, 7</Text>
                </Stack>
            </Group>
            <Stack align={align} spacing={40} justify={'flex-end'} sx={{ height: '100%', zIndex: 3, width: '100%' }}>
                <Text align={align} color={'white'} size={titleSize} weight={200}>CONTACT</Text>
                <Group align={align} position={isMobile ? "center" : "apart"}>
                    <Stack align={align}>
                        <Text align={align} size={16} color={'white'}>WRITE TO US</Text>
                        <Text align={align} component="a" className={classes.ahref} href="mailto:info@homecult.com.ua" size={14}>info@homecult.com.ua</Text>
                        <Text align={align} size={16} mt={45} color={'white'}>CALL US</Text>
                        <Text align={align} component="a" className={classes.ahref} href="tel:+38 (067) 410 98 88" size={14}> +38 (067) 410 98 88</Text>
                        <Text align={align} component="a" className={classes.ahref} href="tel:+38 (067) 462 35 60" size={14}> +38 (067) 462 35 60</Text>
                    </Stack>
                    <Stack align={align}>
                        <Text align={align} size={16} color={'white'}>WORKING HOURS</Text>
                        <Text align={align} color={'white'} size={14} className={classes.lightText}>MON-FRI: <br />9:00 to 19:00</Text>
                        <Text align={align} mt={30} size={16} color={'white'}>SOCIAL NETWORKS</Text>
                        <Text align={align} component="a" target={'_blank'} href="https://www.facebook.com/" className={classes.redText} size={14}>Facebook</Text>
                        <Text align={align} component="a" target={'_blank'} href="https://www.instagram.com/" className={classes.redText} size={14}>Instagram</Text>
                    </Stack>
                </Group>
                {isMobile && <Text align={align} size={18} className={classes.borderedText}>LOOK AT THE MAP</Text>}
                <Copyright withPadding={false} />
            </Stack>
        </div>
    )
}

export default ContactComp