import * as S from "./styles";

export const PersonCard = () => {
  return (
    <S.Card>
      <S.Title>Antonio Jorge</S.Title>
      <S.Description>
        <S.EmphasisText>Áreas de Interesse: </S.EmphasisText>
        Backend, Banco de Dados e Frontend
      </S.Description>

      <S.Description>
        <S.EmphasisText>Escolariade: </S.EmphasisText>
        Ensino Médio Completo
      </S.Description>
    </S.Card>
  );
}