const { Plant } = require('../models');

module.exports = {
	Query: {
		plants: async (_, args) => await Plant.find(args).exec()
	},
	Mutation: {
		addPlant: async (_, args) => {
			try {
				let response = await Plant.create(args);
				return {
					success: true,
					message: null,
					plant: response
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					plant: null
				};
			}
		},
		waterPlant: async (_, { user, name, info }) => {
			try {
				let response = await Plant.updateOne({ user, name }, { watered: true, info });
				return {
					success: true,
					message: null,
					updatedCount: response.nModified
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					updatedCount: null
				};
			}
		},
		undoWaterPlant: async (_, { user, name, info }) => {
			try {
				let response = await Plant.updateOne({ user, name }, { watered: false, info });
				return {
					success: true,
					message: null,
					updatedCount: response.nModified
				};
			} catch (e) {
				return {
					success: false,
					message: e.message,
					updatedCount: null
				};
			}
		}
	}
};
