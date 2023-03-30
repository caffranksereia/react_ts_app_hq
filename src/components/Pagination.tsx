import PageLink from './PageLink';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLenght: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLenght,
  setCurrentPage,
}:  Props){
  const pageNums = [1,2,3]
}
