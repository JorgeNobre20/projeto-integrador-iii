using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SocialMedia.Api.Migrations
{
    /// <inheritdoc />
    public partial class DbWithInterestArea : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InterestArea",
                columns: table => new
                {
                    InterestAreaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InterestAreaName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    JobOfferId = table.Column<int>(type: "int", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InterestArea", x => x.InterestAreaId);
                    table.ForeignKey(
                        name: "FK_InterestArea_JobOffers_JobOfferId",
                        column: x => x.JobOfferId,
                        principalTable: "JobOffers",
                        principalColumn: "JobOfferId");
                    table.ForeignKey(
                        name: "FK_InterestArea_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "UserId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_InterestArea_JobOfferId",
                table: "InterestArea",
                column: "JobOfferId");

            migrationBuilder.CreateIndex(
                name: "IX_InterestArea_UserId",
                table: "InterestArea",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InterestArea");
        }
    }
}
