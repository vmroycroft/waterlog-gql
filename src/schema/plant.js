const { gql } = require('apollo-server');

const schemas = gql`
	extend type Query {
		"""
		Returns information for plants belonging to a user.
		"""
		plants(
			"""
			The lowercase name of the user.
			"""
			user: String
		): [Plant]
	}

	extend type Mutation {
		addPlant(user: String, name: String, watered: Boolean, info: String): AddPlantResponse
		waterPlant(user: String, name: String, info: String): WaterPlantResponse
		undoWaterPlant(user: String, name: String, info: String): UndoWaterPlantResponse
	}

	type AddPlantResponse {
		success: Boolean
		message: String
		plant: Plant
	}

	type WaterPlantResponse {
		success: Boolean
		message: String
		updatedCount: Int
	}

	type UndoWaterPlantResponse {
		success: Boolean
		message: String
		updatedCount: Int
	}

	type Plant {
		id: ID!
		user: String
		name: String
		watered: Boolean
		info: String
	}
`;

module.exports = schemas;
