export default `
type Query {
  school: [School]
}

type Mutation {}

type School {
  data: SchoolData
}

type SchoolData {
  name: String
}
`;
