import styled from 'styled-components';
import { FilledBar } from './HorizontalBar';

export const BlackOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.65);
  padding: 30px;
`;

export const DetailModalWrapper = styled.div`
  position: fixed;
  left: 10%;
  top: 10%;
  bottom: 10%;
  right: 10%;
  background-color: #1A262F;
  padding: 30px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CloseButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  cursor: pointer;
  opacity: 0.8;
  border-radius: 4px;
  transition: 0.15s all;
  border: 1px solid rgba(255,255,255,0);

  &:hover {
    border: 1px solid rgba(255,255,255,0.3);
  }
`;

export const ScrollArea = styled.div`
  overflow-y: scroll;
  height: calc(100% - 55px);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const GridTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 12px;
  margin-bottom: 20px;
  padding-left: 20px;
  color: rgba(255,255,255, 0.8);
`;

export const GridItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  font-size: 14px;
  color: rgba(255,255,255, 0.65);

  a {
    color: rgba(255,255,255, 0.65);
  }
`;

export const HighlightedGridItem = styled(GridItem)`
  color: rgba(255,255,255,0.8);
  font-weight: bold;
  background-color: rgba(0,0,0,0.3);

  ${FilledBar} {
    background-color: rgba(255,255,255,0.8);
  }
`;
