import styled from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

export const CircularLoading = styled(LoadingOutlined).attrs({
  spin: true
})`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
`;
