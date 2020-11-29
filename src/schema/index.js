const { gql } = require('apollo-server');
const plantSchema = require('./plant');

const linkSchema = gql`
	type Query {
		_: Boolean
	}
	type Mutation {
		_: Boolean
	}
`;

module.exports = [linkSchema, plantSchema];
