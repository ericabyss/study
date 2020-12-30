module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            departmentId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            studentId: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            firstName: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            lastName: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING(1000),
                allowNull: true
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: sequelize.literal("now()")
            }
        },
        {
            timestamps: false
        }
    );

    return User;
};