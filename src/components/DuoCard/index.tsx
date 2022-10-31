import { View, TouchableOpacity, Text } from 'react-native';
import { GameController } from "phosphor-react-native"
import { DuoInfo } from '../DuoInfo';

import { THEME } from '../../theme';
import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  userVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: string;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo 
        label='Nome'
        value={data.name}
      />
      <DuoInfo 
        label='Tempo de jogo'
        value={`${data.yearsPlaying} ano(s)`}
      />
      <DuoInfo 
        label='Disponibilidade'
        value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo 
        label='Chamada de áudio?'
        value={data.userVoiceChannel ? "Sim" : "Não"}
        colorValue={data.userVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController 
          color={THEME.COLORS.TEXT} 
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>

    </View>
  );
}