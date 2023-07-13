using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SocialMedia.Api.Migrations
{
    /// <inheritdoc />
    public partial class newdbToIntegrateWithfront : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InterestArea_JobOffers_JobOfferId",
                table: "InterestArea");

            migrationBuilder.DropForeignKey(
                name: "FK_InterestArea_Users_UserId",
                table: "InterestArea");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InterestArea",
                table: "InterestArea");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Role",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "InterestArea",
                newName: "InterestAreas");

            migrationBuilder.RenameIndex(
                name: "IX_InterestArea_UserId",
                table: "InterestAreas",
                newName: "IX_InterestAreas_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_InterestArea_JobOfferId",
                table: "InterestAreas",
                newName: "IX_InterestAreas_JobOfferId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_InterestAreas",
                table: "InterestAreas",
                column: "InterestAreaId");

            migrationBuilder.AddForeignKey(
                name: "FK_InterestAreas_JobOffers_JobOfferId",
                table: "InterestAreas",
                column: "JobOfferId",
                principalTable: "JobOffers",
                principalColumn: "JobOfferId");

            migrationBuilder.AddForeignKey(
                name: "FK_InterestAreas_Users_UserId",
                table: "InterestAreas",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_InterestAreas_JobOffers_JobOfferId",
                table: "InterestAreas");

            migrationBuilder.DropForeignKey(
                name: "FK_InterestAreas_Users_UserId",
                table: "InterestAreas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_InterestAreas",
                table: "InterestAreas");

            migrationBuilder.RenameTable(
                name: "InterestAreas",
                newName: "InterestArea");

            migrationBuilder.RenameIndex(
                name: "IX_InterestAreas_UserId",
                table: "InterestArea",
                newName: "IX_InterestArea_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_InterestAreas_JobOfferId",
                table: "InterestArea",
                newName: "IX_InterestArea_JobOfferId");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "Users",
                type: "date",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_InterestArea",
                table: "InterestArea",
                column: "InterestAreaId");

            migrationBuilder.AddForeignKey(
                name: "FK_InterestArea_JobOffers_JobOfferId",
                table: "InterestArea",
                column: "JobOfferId",
                principalTable: "JobOffers",
                principalColumn: "JobOfferId");

            migrationBuilder.AddForeignKey(
                name: "FK_InterestArea_Users_UserId",
                table: "InterestArea",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
