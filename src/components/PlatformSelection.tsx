import { Select } from '@chakra-ui/react'

interface Props {
    handleSelection: (platform: string) => void
}

interface Platforms{
    [key: string]: string;
}
export const PlatformSelection = ({ handleSelection }: Props) => {
    const platforms : Platforms = {
        PC: 'pc',
        Playstation: 'playstation',
        Xbox: 'xbox',
        Mac: 'mac',
        Linux: 'linux',
        Android: 'android',
        iOS: 'ios',
        Nintendo: 'nintendo',
        Web: 'web'
    };

    return (
        <Select placeholder='Platforms' width="150px" onChange={(event) => {
            console.log("event log: "+event.target.value)
            handleSelection(event.target.value)}}>
            {Object.entries(platforms).map(([platform, value]) => (
                <option key={value} value={value}>
                    {platform}
                </option>
            ))}
        </Select>
    );
};
